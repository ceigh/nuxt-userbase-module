import path from 'path'
import { Module } from '@nuxt/types'

interface Options {
  readonly appId: string
}

const Userbase: Module<Options> = function (options) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}

export default Userbase
export const meta = require('../package.json')
