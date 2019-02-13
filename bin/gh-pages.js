var ghpages = require('gh-pages')
 
ghpages.publish('dist', {
  repo: ( 
    'https://'
    + process.env.GH_USER + ':'
    + process.env.GH_TOKEN
    + '@github.com/status-im/keycard.status.im.git'
  ),
  branch: 'gh-pages',
  dotfiles: true,
  silent: false
}, function(err) {
  if (err !== undefined) {
    console.error(err)
    throw err
  }
})
