import u from 'userbase-js'
import { Userbase } from 'userbase-js/types'
import { Plugin } from '@nuxt/types'

const appId = '<%= options.appId %>'

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

const plugin: Plugin = context => {
  context.$userbase = {
    init: (params = { appId }) => u.init(params),
    signUp: params => u.signUp(params),
    signIn: params => u.signIn(params),
    signOut: () => u.signOut(),
    forgotPassword: params => u.forgotPassword(params),
    updateUser: params => u.updateUser(params),
    deleteUser: () => u.deleteUser(),

    openDatabase: params => u.openDatabase(params),
    getDatabases: () => u.getDatabases(),
    insertItem: params => u.insertItem(params),
    updateItem: params => u.updateItem(params),
    deleteItem: params => u.deleteItem(params),
    putTransaction: params => u.putTransaction(params),

    purchaseSubscription: params => u.purchaseSubscription(params),
    cancelSubscription: () => u.cancelSubscription(),
    resumeSubscription: () => u.resumeSubscription(),
    updatePaymentMethod: params => u.updatePaymentMethod(params)
  }
}
export default plugin
