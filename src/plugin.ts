import userbase from 'userbase-js'

import { Userbase } from 'userbase-js/types'
import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

const appId = '<%= options.appId %>'

const plugin: Plugin = (context) => {
  context.$userbase = {
    ...userbase,
    init: (params = { appId }) => userbase.init(params)
  }
}
export default plugin
