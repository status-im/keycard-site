---
id: applet_installation
title: Card Setup
---

# Preparing the card

Keycard ships with all applets fully installed but not initialized. The most convenient way to initialize and manage the card is to install the [Keycard Connect](https://github.com/status-im/keycard-connect) Android app. It allows to fully initialize a card with pairing key, PIN, PUK and BIP39 seed. It also provides basic functionality like changing credentials, changing or removing keys and clear pairing slots. The last functionality is especially useful if you are integrating with Keycard and accidentally fill all pairing slots. Using the "Unpair others" button will remove all pairing except the Keycard Connect's one.

In some cases you might want to reset the applet status completely for testing purposes. This is done by reinstalling the applet, which can be accomplished using the [Keycard CLI](https://github.com/status-im/keycard-cli). To use the Keycard CLI, a USB reader is needed to be able to communicate with the card. The repository contains example scripts for applet reinstallation.

## Card requirements

The Keycard applet can be installed not only on our cards, but on any card which meets the following requirements:

* JavaCard 3.0.4 or later.
* Cipher.ALG_AES_BLOCK_128_CBC_NOPAD
* Cipher.ALG_AES_CBC_ISO9797_M2
* KeyAgreement.ALG_EC_SVDP_DH_PLAIN
* KeyAgreement.ALG_EC_SVDP_DH_PLAIN_XY (defined in JavaCard 3.0.5 but available on some 3.0.4 cards nonetheless)
* KeyPair.ALG_EC_FP (generation of 256-bit keys)
* MessageDigest.ALG_SHA_256
* MessageDigest.ALG_SHA_512
* RandomData.ALG_SECURE_RANDOM
* Signature.ALG_AES_MAC_128_NOPAD
* Signature.ALG_ECDSA_SHA_256

Best performance is achieved if the card supports:

* Signature.ALG_HMAC_SHA_512

Keycard requires about 10kb of NVM. All allocations, instantiations and checks are performed at installation time, so if installation succeeds, the applet will work fine.
