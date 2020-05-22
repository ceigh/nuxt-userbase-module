export namespace Payments {
  export interface CancelSubscriptionResult {
    cancelSubscriptionAt: Date
  }

  export interface PurchaseSubscriptionOpts {
    successUrl: string
    cancelUrl: string
  }
}
