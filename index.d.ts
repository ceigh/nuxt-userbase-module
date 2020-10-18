import { Userbase } from 'userbase-js/types'

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
