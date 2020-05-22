import { Users } from './users'
import { Data } from './data'

export interface Userbase {
  readonly init: (opts: Users.InitOpts) => Promise<Users.Session>
  readonly signUp: (opts: Users.SignUpOpts) => Promise<Users.User>
  readonly signIn: (opts: Users.SignInOpts) => Promise<Users.User>
  readonly signOut: () => Promise<void>
  readonly forgotPassword: (opts: Users.ForgotPasswordOpts) => Promise<void>
  readonly updateUser: (opts: Users.UpdateUserOpts) => Promise<void>
  readonly deleteUser: () => Promise<void>

  readonly openDatabase: (opts: Data.OpenDatabaseOpts) => Promise<void>
}

export type UserbaseInit = () => Userbase
