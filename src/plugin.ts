import userbase from 'userbase-js'

import { Userbase } from 'userbase-js/types'
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $userbase: Userbase
  }
}
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $userbase: Userbase
  }
  interface Context {
    $userbase: Userbase
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $userbase: Userbase
  }
}

const appId = '<%= options.appId %>'

const plugin: Plugin = (_context, inject) => {
  inject('userbase', {
    ...userbase,
    init: (params = { appId }) => userbase.init(params)
  })
}
export default plugin
