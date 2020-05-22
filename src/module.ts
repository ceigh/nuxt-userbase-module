import path from 'path'
import { Module } from '@nuxt/types'

interface ModuleOpts {
  debug?: boolean
  appId?: string
}

const Userbase: Module<ModuleOpts> = function (moduleOpts) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { ...this.options.userbase, ...moduleOpts }
  })
}

export default Userbase
export const meta = require('../package.json')
