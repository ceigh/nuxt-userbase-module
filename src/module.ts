import { ModuleOptions } from './types/nuxt'
// import { createMiddleware } from './module.middleware'
// import plugin from './module.plugin'

const optionName = 'nuxt-userbase'

type TODO = any

module.exports = function(this: TODO, moduleOptions: ModuleOptions) {
  const consola = require('consola')
  const options = Object.assign(
    {},
    this.options[optionName],
    moduleOptions || {}
  )
  const { enabled } = options
  if (enabled === false) {
    consola.info('Skip activation of nuxt-userbase module')
    return false
  }
  consola.info('Add nuxt-userbase module to server middleware')
  return true
}

module.exports.meta = require('../package.json')
