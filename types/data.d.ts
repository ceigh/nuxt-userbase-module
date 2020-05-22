type Item = object | string | number | boolean | null
interface IndexedItem {
  itemId: string
  item: Item
}
interface InsertOperation {
  command: 'Insert'
  item: Item
}
interface UpdateOperation {
  command: 'Update'
  item: Item
  itemId: string
}
interface DeleteOperation {
  command: 'Delete'
  itemId: string
}
type Operation = InsertOperation | UpdateOperation | DeleteOperation

interface OpenDatabaseOpts {
  databaseName: string
  changeHandler: (items: IndexedItem[]) => any
}
interface InsertItemOpts {
  databaseName: string
  item: Item
  itemId?: string
}
interface UpdateItemOpts {
  databaseName: string
  item: Item
  itemId: string
}
interface DeleteItemOpts {
  databaseName: string
  itemId: string
}
interface PutTransactionOpts {
  databaseName: string
  operations: Operation[]
}

export namespace Data {
  type OpenDatabase = (opts: OpenDatabaseOpts) => Promise<void>
  type InsertItem = (opts: InsertItemOpts) => Promise<void>
  type UpdateItem = (opts: UpdateItemOpts) => Promise<void>
  type DeleteItem = (opts: DeleteItemOpts) => Promise<void>
  type PutTransaction = (opts: PutTransactionOpts) => Promise<void>
}
