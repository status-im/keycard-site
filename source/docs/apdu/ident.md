---
id: apdu_ident
title: Protocol
---

# IDENT

* CLA = 0x80
* INS = 0x14
* P1 = 0x00
* P2 = 0x00
* Data = a 256-bit random challenge
* Response Data = the challenge's signature, followed by the card's certificate
* Response SW = 0x9000 on success, 0x6A80 if the format is invalid.

Response Data format:
- Tag 0xA0 = signature template
  - Tag 0x8A = Certificate
  - Tag 0x30 = ECDSA Signature
    - Tag 0x02 = R value
    - Tag 0x02 = S value

Signs the given challenge using the card's identification private key and returns the card certificate followed by the generated signature. The certificate is composed by the concatenation of the card's identification public key in compressed form (33 bytes) and its signature r,s (32 bytes each) and recovery id (1 byte) generated by the certificate authority.

This command does not require PIN authentication or a Secure Channel to be established. It is strongly recommended that the client performs this identification step before initializing the card and/or before pairing with it. After a card has been paired it is not necessary to repeat the identification step.

To perform verification, first verify the challenge's signature using public key in the certificate. If the signature is correct, recover the CA's public key using the r,s, and recovery ID part of the certificate. If the public key matches that of a certificate authority you trust proceed to verify the signature, which has been calculated on the SHA-256 hash of the card's identification public key in the form returned in the certificate.