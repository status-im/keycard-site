---
id: index
title: Docs
---

# Overview

Keycard provides to developer an hardware implementation of a [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) HD wallet. This means it supports key generation, derivation and signing. It also allows exporting keys defined in the context of [EIP-1581](https://eips.ethereum.org/EIPS/eip-1581).

Communication with the Keycard happens through a simple APDU interface, together with a Secure Channel guaranteeing confidentiality, authentication and integrity of all commands. It supports both NFC and ISO7816 physical interfaces, meaning that it is compatible with any Android phone equipped with NFC and all USB Smartcard readers.

The most obvious case for integration of Keycard is crypto wallets (ETH, BTC, etc), however it can be used in other systems where a BIP-32 key tree is used and/or you perform authentication/identification.

To further simplify integration, we have developed a Java-based API which can be used on both desktop and Android systems. On the desktop it uses the javax.smartcardio to interface with the card, which is compatible with most USB readers. On Android it uses the on-board NFC reader. If you develop in Java or any other language available, this is the easiest way to use the Keycard. You can also find a Go and Swift SDK and more resources [here](resources.html)

[Read the SDK documentation](sdk/installation.html)

If you use a different language, please first refer to the [Java SDK](sdk/installation.html) documentation for a high level overview of how to perform different tasks with the Keycard. Then, please check the [protocol documentation](apdu) out for the low-level details.

Since Keycard 3.0, besides the hardware wallet functionality, you find a second applet with a different purpouse and security model. This applet, internally called Cash applet, does not share any data with the wallet and provides a single keypair which can be used to sign any piece of information. Unlike the wallet applet, the cash applet does not require a PIN or SecureChannel and can be tapped on 3rd party terminal. This enable convenient in-person interactions at the expense of security. For this reason the keypair in the Cash applet should not hold any funds at all, but should instead be used in concert with smartcontracts in scenarios with lower security requirements. It is especially suited for signing EIP-712 formatted metatx. Some examples can include ticketing, small payments, etc. It is worth repeating that the Wallet and Cash applet, while living on the same card, do not share any data or key and are completely independent from each other. In order to easily integrate Keycard with any dApp, we defined a small extension to the [Web3 API](web3.html).

## Versioning

The current version of the applet is 3.0. This documentation applies to said version. [Semantic versioning](https://semver.org) is used throughout the project, with the omission of the patch number for the applet, but not the SDK and related tools. The version of all components of the Keycard project are tied to the protocol version.

## Get in touch

You are at the right place to find informations about Keycard and get you going.

If you need more and want to discuss:
- for live discussion and help, go to [Keycard Status channel](https://join.status.im/chat/public/status-keycard)
- to check or raise issues/bugs/feature requests please do so in our [GitHub repos](https://keycard.tech/docs/resources.html)
- check our latest Keycard news on [Discuss](https://discuss.status.im/c/keycard)
