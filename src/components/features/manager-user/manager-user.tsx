import { DataTableCustom } from '@/components/ui/molecules/custom-data-table/custom-data-table';
import styles from './manager-user.module.scss';
import { TableColumn } from 'react-data-table-component';
import useUserRepository from '@/hooks/repositories/use-user.repository';
import { useEffect } from 'react';

type DataRow = {
  id:number;
  name: string;
  type_identification: string;
  role: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Nombre',
    selector: row => row.name
  },
  {
    name: 'Tipo de identificación',
    selector: row => row.type_identification
  },
  {
    name: 'Rol',
    cell: () =>
      (<div>
        <button>Editar</button>
        <button>Eliminar</button>
      </div>)
  }
];
const data:DataRow[] = [
  {
    id: 1,
    name: 'Anderson Vargas',
    role: 'Programador',
    type_identification: 'Cedula'
  },
  {
    id: 2,
    name: 'Camilo Vanegas',
    role: 'Programador',
    type_identification: 'Cedula'
  },
  {
    id: 3,
    name: 'Jesson Ember',
    role: 'Programador',
    type_identification: 'Cedula'
  }
];

export const ManagerUser = () => {
  const repository = useUserRepository();

  useEffect(() => {
    repository.listUsers().then(response => {

    });
  }, []);

  return (
    <div>
      <h2>Página de usuarios</h2>

      <DataTableCustom
        columns={columns}
        data={data}
      />
    </div>
  );
};
