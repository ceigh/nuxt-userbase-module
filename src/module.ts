import path from 'path'
import type { Module } from '@nuxt/types'

export interface Options {
  appId: string
}

const Userbase: Module<Options> = function (moduleOpts) {
  const options: Options = { ...this.options.userbase, ...moduleOpts }
  if (!options.appId) {
    throw new Error('Missing `appId` in userbase options')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}

export default Userbase
export const meta = require('../../package.json')
