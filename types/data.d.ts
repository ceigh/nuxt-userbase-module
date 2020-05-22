export namespace Data {
  export type Item = object | string | number | boolean | null
  export interface IndexedItem {
    readonly itemId: string
    readonly item: Item
  }
  export interface Operation {
    readonly command: 'Insert' | 'Update' | 'Delete'
    readonly item: Item
    readonly itemId?: string
  }

  export interface OpenDatabaseOpts {
    readonly databaseName: string
    readonly changeHandler: (items: IndexedItem[]) => any
  }
  export interface InsertItemOpts {
    readonly databaseName: string
    readonly item: Item
    readonly itemId?: string
  }
  export interface UpdateItemOpts {
    readonly databaseName: string
    readonly item: Item
    readonly itemId: string
  }
  export interface DeleteItemOpts {
    readonly databaseName: string
    readonly itemId: string
  }
  export interface PutTransactionOpts {
    readonly databaseName: string
    readonly operations: Operation[]
  }
}
