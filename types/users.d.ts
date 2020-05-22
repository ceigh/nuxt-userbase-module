export namespace Users {
  export type RememberMe = 'local' | 'session' | 'none'
  export interface UserProfile {
    [key: string]: string
  }
  export interface User {
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
  export interface Session {
    user?: User
    lastUsedUsername?: string
  }

  export interface InitOpts {
    appId: string
  }
  export interface SignUpOpts {
    username: string
    password: string
    email?: string
    profile?: UserProfile
    rememberMe?: RememberMe
  }
  export interface SignInOpts {
    username: string
    password: string
    rememberMe?: RememberMe
  }
  export interface ForgotPasswordOpts {
    username: string
  }
  export interface UpdateUserOpts {
    username?: string
    currentPassword?: string
    newPassword?: string
    email?: string | null
    profile?: UserProfile
  }
}
