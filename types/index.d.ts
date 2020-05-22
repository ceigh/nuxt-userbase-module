import { Users } from './users'
import { Data } from './data'
import { Payments } from './payments'

export interface Userbase {
  init: Users.Init
  signUp: Users.SignUp
  signIn: Users.SignIn
  signOut: Users.SignOut
  forgotPassword: Users.ForgotPassword
  updateUser: Users.UpdateUser
  deleteUser: Users.DeleteUser

  openDatabase: Data.OpenDatabase
  insertItem: Data.InsertItem
  updateItem: Data.UpdateItem
  deleteItem: Data.DeleteItem
  putTransaction: Data.PutTransaction

  purchaseSubscription: Payments.PurchaseSubscription
  cancelSubscription: Payments.CancelSubscription
  resumeSubscription: Payments.ResumeSubscription
  updatePaymentMethod: Payments.UpdatePaymentMethod
}
