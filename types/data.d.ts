export namespace Data {
  export interface Item {
    readonly itemId: string
    readonly item: object
  }

  export interface OpenDatabaseOpts {
    readonly databaseName: string
    readonly changeHandler: (items: Item[]) => any
  }
}
