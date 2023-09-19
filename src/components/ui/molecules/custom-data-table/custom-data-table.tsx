import DataTable, {TableColumn} from 'react-data-table-component';

interface DataTableCustomProps<DataRow = {}> {
  columns: TableColumn<DataRow>[]
  data: DataRow[]
}

export const DataTableCustom = <DataRow = {}>({
  columns, data
}:DataTableCustomProps<DataRow>) => {
  return (
    <div>
      <DataTable
        
        columns={columns}
        data={data}
      />
    </div>
  );
};
