---
id: apdu_derivekey
title: Protocol
---

# DERIVE KEY

* CLA = 0x80
* INS = 0xD1
* P1 = derivation options
* P2 = 0x00
* Data = a sequence of 32-bit integers (most significant byte first). Empty if the master key must be used.
* Response SW = 0x9000 on success, 0x6A80 if the format is invalid.
* Preconditions: Secure Channel must be opened, user PIN must be verified, an extended keyset must be loaded

This command sets the derivation path used for subsequent SIGN and EXPORT KEY commands without an explicit path. The maximum depth of derivation from the master key is 10. Any attempt to get deeper results in 0x6A80 being returned.

Using this command is now discouraged. It is recommended to explicitly give the derivation path in each SIGN and EXPORT KEY command.

P1:
* bit 0-5 = reserved
* bit 7-6:
  - 00 derive from master keys
  - 01 derive from parent keys
  - 10 derive from current keys
  - 11 reserved
