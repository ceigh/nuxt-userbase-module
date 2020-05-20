interface InitOpts {
  readonly appId: string
}
type Init = (opts: InitOpts) => Session

interface UserbaseResult {
  readonly init: Init
}
export type Userbase = () => UserbaseResult
