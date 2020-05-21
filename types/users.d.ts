export namespace Users {
  export interface UserProfile {
    readonly [key: string]: string
  }
  export interface User {
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
  export interface Session {
    readonly user?: User
    readonly lastUsedUsername?: string
  }
  export type RememberMe = 'local' | 'session' | 'none'


  export interface InitOpts {
    readonly appId: string
  }
  export interface SignUpOpts {
    readonly username: string
    readonly password: string
    readonly email?: string
    readonly profile?: UserProfile
    readonly rememberMe?: RememberMe
  }
  export interface SignInOpts {
    readonly username: string
    readonly password: string
    readonly rememberMe?: RememberMe
  }
  export interface ForgotPasswordOpts {
    readonly username: string
  }
  export interface UpdateUserOpts {
    readonly username?: string
    readonly currentPassword?: string
    readonly newPassword?: string
    readonly email?: string | null
    readonly profile?: UserProfile
  }
}
