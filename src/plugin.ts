import userbase from 'userbase-js'
import { Plugin } from '@nuxt/types'
import { Userbase, UserbaseInit } from '../types'

const appId = '<%= options.appId %>'

const userbaseInit: UserbaseInit = () => {
  return {
    init(opts = { appId }) {
      return userbase.init(opts)
    },
    signUp(opts) {
      return userbase.signUp(opts)
    },
    signIn(opts) {
      return userbase.signIn(opts)
    },
    signOut() {
      return userbase.signOut()
    },
    forgotPassword(opts) {
      return userbase.forgotPassword(opts)
    },
    updateUser(opts) {
      return userbase.updateUser(opts)
    },
    deleteUser() {
      return userbase.deleteUser()
    },

    openDatabase(opts) {
      return userbase.openDatabase(opts)
    },
    insertItem(opts) {
      return userbase.insertItem(opts)
    },
    updateItem(opts) {
      return userbase.updateItem(opts)
    },
    deleteItem(opts) {
      return userbase.deleteItem(opts)
    },
    putTransaction(opts) {
      return userbase.putTransaction(opts)
    },

    purchaseSubscription(opts) {
      return userbase.purchaseSubscription(opts)
    },
    cancelSubscription() {
      return userbase.cancelSubscription()
    },
    resumeSubscription() {
      return userbase.resumeSubscription()
    },
    updatePaymentMethod(opts) {
      return userbase.updatePaymentMethod(opts)
    }
  }
}

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

const plugin: Plugin = context => {
  context.$userbase = userbaseInit()
}
export default plugin
