import { Plugin } from '@nuxt/types'
import { Userbase, UserbaseResult } from '../types'

const _opts = { appId: '<%= options.appId %>' }

declare module '@nuxt/types' {
  interface Context {
    $userbase: UserbaseResult
  }
}

const userbase: Userbase = () => {
  return {
    init({ appId } = _opts) {
      console.log(appId)
    }
  }
}

const plugin: Plugin = context => {
  context.$userbase = userbase()
}
export default plugin
