---
id: sdk_derivation_signing
title: Java SDK
---

# Derivation & signing

Signing is the main goal of the Keycard and indeed any hardware wallet. The Keycard performs signing with the currently active key. Key derivation is used to select the active key to a specific key BIP32 key path. 

## Key derivation

As mentioned before, the Keycard is a BIP32 compatible wallet. This means that it can perform key derivation as defined by the BIP32 specification in order to create a hierarchical deterministic wallet. When deriving a key, this key becomes active.

When creating or importing a wallet to the Keycard, the active key is the master key. Note that the maximum depth of the key path is 10, excluding the master key.

Key derivation requires user authentication

Since a line of code is worth a thousand words, below is an example of deriving a standard key path

```java
cmdSet.deriveKey("m/44'/0'/0'/0/0").checkOK();
```

You can also read the current active path with with

```java
// you can then get is as a string with currentPath.toString()
KeyPath currentPath = new KeyPath(cmdSet.getStatus(KeycardCommandSet.GET_STATUS_P1_KEY_PATH).checkOK().getData());
```

## Signing

Your Keycard has been initialized, has a wallet and you have derived the keypath you need. You can now perform transactions by signing them with the card. Since the Keycard has no user input/output capabilities, it would be useless to transfer the entire transaction to the card for signing. You should instead calculate the transaction hash, according to the rules of the cryptocurrency you are handling and send that for signature instead. This also means, that you can handle anything which requires ECDSA signatures over SECP256k1 curve, regardless of the used hashing algorithm (at the condition that it output a 256-bit hash of course). This opens the door to signing transactions for the most common cryptocurrencies, but also makes it usable outside the realm of crypto transactions.

Signing is done as

```java
// hash is the hash to sign, for example the Keccak-256 hash of an Ethereum transaction
// the signature object contains r, s, recId and the public key associated to this signature
RecoverableSignature signature = new RecoverableSignature(hash, cmdSet.sign(hash).checkOK().getData());
```

Signing requires user authentication.

## Combined derivation and sign

Since version 2.2 of the Keycard API, it is possible to combine derivation and sign in a single step. Additionally, it is possible to choose whether the given path becomes the current path or not. Example

```java
// hash is the hash to sign, the second argument is the path to use, in the same format as for the DERIVE KEY command
// the third argument is a flag indicating whether the derived key should become the current key or not
APDUResponse resp = cmdSet.signWithPath(hash, "m/44'/0'/0'/0/0", false);
RecoverableSignature signature = new RecoverableSignature(hash, resp.checkOK().getData());
```

this method of signing is now actually the recommended method since it does not rely on existing card state.