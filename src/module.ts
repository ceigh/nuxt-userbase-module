import path from 'path'
import { Module } from '@nuxt/types'

interface Opts {
  appId?: string
}

const Userbase: Module<Opts> = function (moduleOpts) {
  const options = { ...this.options.userbase, ...moduleOpts }
  if (!options.appId) {
    throw new Error('`appId` is required in userbase options')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}

export default Userbase
export const meta = require('../package.json')
