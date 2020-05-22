import { Users } from './users'
import { Data } from './data'

export interface Userbase {
  init: (opts: Users.InitOpts) => Promise<Users.Session>
  signUp: (opts: Users.SignUpOpts) => Promise<Users.User>
  signIn: (opts: Users.SignInOpts) => Promise<Users.User>
  signOut: () => Promise<void>
  forgotPassword: (opts: Users.ForgotPasswordOpts) => Promise<void>
  updateUser: (opts: Users.UpdateUserOpts) => Promise<void>
  deleteUser: () => Promise<void>

  openDatabase: (opts: Data.OpenDatabaseOpts) => Promise<void>
  insertItem: (opts: Data.InsertItemOpts) => Promise<void>
  updateItem: (opts: Data.UpdateItemOpts) => Promise<void>
  deleteItem: (opts: Data.DeleteItemOpts) => Promise<void>
  putTransaction: (opts: Data.PutTransaction) => Promise<void>
}

export type UserbaseInit = () => Userbase
