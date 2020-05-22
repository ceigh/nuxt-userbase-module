interface CancelSubscriptionResult {
  cancelSubscriptionAt: Date
}

interface PurchaseSubscriptionOpts {
  successUrl: string
  cancelUrl: string
}
interface UpdatePaymentMethodOpts extends PurchaseSubscriptionOpts {}

export namespace Payments {
  type PurchaseSubscription = (opts: PurchaseSubscriptionOpts) => Promise<void>
  type CancelSubscription = () => Promise<CancelSubscriptionResult>
  type ResumeSubscription = () => Promise<void>
  type UpdatePaymentMethod = (opts: UpdatePaymentMethodOpts) => Promise<void>
}
