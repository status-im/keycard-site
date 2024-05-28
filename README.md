# Keycard - Secure, Contactless, Open Source Hardwallet

This repo hosts the code for both [keycard.tech](https://keycard.tech/) on the `master` branch (which builds and serves through `gh-pages`), and [dev.keycard.im](https://dev.keycard.tech/) on the `develop` branch.


## Testing locally

Make sure you have node.js installed first.

1. Open Terminal and navigate to the project root directory,
2. Run `yarn install`,
3. Run `yarn run build`,
4. Run `hexo server`

- [hexo server](https://hexo.io/docs/server.html)

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/keycard.tech/) `master` and pushes to `deploy-master` branch, which is hosted at <https://keycard.tech/>.
- [CI builds](https://ci.infra.status.im/job/website/job/dev.keycard.tech/) `develop` and pushes to `deploy-develop` branch, which is hosted at <https://dev.keycard.tech/>.

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.
