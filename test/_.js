const { resolve } = require('path')

module.exports = {
  getConfig () {
    const rootDir = resolve(__dirname, 'mock')
    const config = require(resolve(rootDir, 'nuxt.config.js'))
    config.rootDir = rootDir
    return config
  }
}
