import path from 'path'
import { Module } from '@nuxt/types'
import { Opts } from '../types'

const Userbase: Module<Opts> = function (moduleOpts) {
  const globalOpts: Opts = this.options.userbase
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { ...globalOpts, ...moduleOpts }
  })
}

export default Userbase
export const meta = require('../package.json')
