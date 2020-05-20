interface InitOpts {
  readonly appId: string
}

interface Userbase {
  readonly init: (opts: InitOpts) => Promise<Session>
}

export type UserbaseInit = () => Userbase
