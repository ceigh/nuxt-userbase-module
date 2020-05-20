import userbase from 'userbase-js'
import { Plugin } from '@nuxt/types'
import { Userbase, UserbaseInit } from '../types'

const _opts = { appId: '<%= options.appId %>' }

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

const userbaseInit: UserbaseInit = () => {
  return {
    init(opts = _opts) {
      return userbase.init(opts)
    }
  }
}

const plugin: Plugin = context => {
  context.$userbase = userbaseInit()
}
export default plugin
