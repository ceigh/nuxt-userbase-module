const { resolve } = require('path')

exports.default = {
  buildModules: [
    resolve(__dirname, '../../dist/module.js')
  ],
  userbase: {
    appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  },
  dev: false
}
