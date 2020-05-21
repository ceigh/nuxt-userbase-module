interface UserProfile {
  readonly [key: string]: string
}
interface User {
  readonly username: string
  readonly userId: string
  readonly authToken: string
  readonly creationDate: Date
  readonly email?: string
  readonly profile?: UserProfile
  readonly paymentsMode: 'disabled' | 'test' | 'prod'
  readonly subscriptionStatus?:
    | 'active'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'canceled'
    | 'unpaid'
    | 'trialing'
  readonly trialExpirationDate?: Date
  readonly cancelSubscriptionAt?: Date
}
interface Session {
  readonly user?: User
  readonly lastUsedUsername?: string
}
type RememberMe = 'local' | 'session' | 'none'

interface InitOpts {
  readonly appId: string
}
interface SignUpOpts {
  readonly username: string
  readonly password: string
  readonly email?: string
  readonly profile?: UserProfile
  readonly rememberMe?: RememberMe
}
interface SignInOpts {
  readonly username: string
  readonly password: string
  readonly rememberMe?: RememberMe
}

interface Userbase {
  readonly init: (opts: InitOpts) => Promise<Session>
  readonly signUp: (opts: SignUpOpts) => Promise<User>
  readonly signIn: (opts: SignInOpts) => Promise<User>
  readonly signOut: () => Promise<void>
}
export type UserbaseInit = () => Userbase
