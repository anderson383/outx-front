export type TableEntity = {
  id: string
  name: string
  code: string
}

export interface TableRepository {
  listTablesForConfig (): Promise<TableEntity[]>;
  generateQrCredentials (idTable:string) : Promise<string>
}
