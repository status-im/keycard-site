# Keycard

This repo hosts the code for both `keycard.tech` on the master branch (which builds and serves through gh-pages), and `dev.keycard.tech` on the `develop` branch.

There is an edit button on each page, which will take you directly to the document you need to edit on the develop branch. We can then allow a large group of people to push directly to develop and show their changes on the staging site when asking for review, which should smooth out and speed up the process considerably for everyone. master is obviously protected, and will only have changes merged in from develop once accepted.

# Depoloyment

Two Jenkins jobs exist to deploye `master` and `develop` branches respectively:

* https://ci.status.im/job/misc/job/keycard.tech/
* https://ci.status.im/job/misc/job/dev.keycard.tech/
