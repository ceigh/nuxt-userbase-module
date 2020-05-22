import u from 'userbase-js'
import { Plugin } from '@nuxt/types'
import { Userbase } from '../types'

const appId = '<%= options.appId %>'

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

const plugin: Plugin = context => {
  context.$userbase = {
    init: (opts = { appId }) => u.init(opts),
    signUp: opts => u.signUp(opts),
    signIn: opts => u.signIn(opts),
    signOut: () => u.signOut(),
    forgotPassword: opts => u.forgotPassword(opts),
    updateUser: opts => u.updateUser(opts),
    deleteUser: () => u.deleteUser(),

    openDatabase: opts => u.openDatabase(opts),
    insertItem: opts => u.insertItem(opts),
    updateItem: opts => u.updateItem(opts),
    deleteItem: opts => u.deleteItem(opts),
    putTransaction: opts => u.putTransaction(opts),

    purchaseSubscription: opts => u.purchaseSubscription(opts),
    cancelSubscription: () => u.cancelSubscription(),
    resumeSubscription: () => u.resumeSubscription(),
    updatePaymentMethod: opts => u.updatePaymentMethod(opts)
  }
}
export default plugin
