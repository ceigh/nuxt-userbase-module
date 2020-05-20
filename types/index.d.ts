interface User {
  readonly username: string
  readonly userId: string
  readonly authToken: string
  readonly creationDate: Date
  readonly email?: string
  readonly profile?: object
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

interface InitOpts {
  readonly appId: string
}

interface Userbase {
  readonly init: (opts: InitOpts) => Promise<Session>
}
export type UserbaseInit = () => Userbase
