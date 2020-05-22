type RememberMe = 'local' | 'session' | 'none'
interface UserProfile {
  [key: string]: string
}
interface User {
  username: string
  userId: string
  authToken: string
  creationDate: Date
  email?: string
  profile?: UserProfile
  paymentsMode: 'disabled' | 'test' | 'prod'
  subscriptionStatus?:
    | 'active'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'canceled'
    | 'unpaid'
    | 'trialing'
  trialExpirationDate?: Date
  cancelSubscriptionAt?: Date
}
interface Session {
  user?: User
  lastUsedUsername?: string
}

interface InitOpts {
  appId: string
}
interface SignUpOpts {
  username: string
  password: string
  email?: string
  profile?: UserProfile
  rememberMe?: RememberMe
}
interface SignInOpts {
  username: string
  password: string
  rememberMe?: RememberMe
}
interface ForgotPasswordOpts {
  username: string
}
interface UpdateUserOpts {
  username?: string
  currentPassword?: string
  newPassword?: string
  email?: string | null
  profile?: UserProfile
}

export namespace Users {
  type Init = (opts: InitOpts) => Promise<Session>
  type SignUp = (opts: SignUpOpts) => Promise<User>
  type SignIn = (opts: SignInOpts) => Promise<User>
  type SignOut = () => Promise<void>
  type ForgotPassword = (opts: ForgotPasswordOpts) => Promise<void>
  type UpdateUser = (opts: UpdateUserOpts) => Promise<void>
  type DeleteUser = () => Promise<void>
}
