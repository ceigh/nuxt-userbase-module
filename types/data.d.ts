export namespace Data {
  export type Item = object | string | number | boolean | null
  export interface IndexedItem {
    itemId: string
    item: Item
  }
  export interface Operation {
    command: 'Insert' | 'Update' | 'Delete'
    item: Item
    itemId?: string
  }

  export interface OpenDatabaseOpts {
    databaseName: string
    changeHandler: (items: IndexedItem[]) => any
  }
  export interface InsertItemOpts {
    databaseName: string
    item: Item
    itemId?: string
  }
  export interface UpdateItemOpts {
    databaseName: string
    item: Item
    itemId: string
  }
  export interface DeleteItemOpts {
    databaseName: string
    itemId: string
  }
  export interface PutTransactionOpts {
    databaseName: string
    operations: Operation[]
  }
}
