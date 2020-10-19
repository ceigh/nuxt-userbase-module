import userbase from 'userbase-js'
import type { Plugin } from '@nuxt/types'

const appId = '<%= options.appId %>'
const plugin: Plugin = (_context, inject) => {
  inject('userbase', {
    ...userbase,
    init: (params = { appId }) => userbase.init(params)
  })
}

export default plugin
