import {
  useEffect, useState
} from 'react';
import { DataTableCustom } from '@/components/ui/molecules/custom-data-table/custom-data-table';
import ModalPanel from '@/components/ui/molecules/modals/modal/modal-panel';
import QRCode from 'react-qr-code';
import styles from './manager-table.module.scss';
import { TableColumn } from 'react-data-table-component';
import { TableEntity } from '@/services/repositories/configuration/table/table.repository';
import useTableRepository from '@/hooks/repositories/use-table.repository';

export const ManagerTable = () => {
  const repository = useTableRepository();

  const [listTable, setListTable] = useState<TableEntity[]>([]);
  const [modalQr, setModalQr] = useState(false);
  const [valueQr, setValueQR] = useState('');

  useEffect(() => {
    repository.listTablesForConfig().then(tableData => {
      setListTable(tableData);
    });
  }, []);

  const handleQrOpen = (id:string) => {
    repository.generateQrCredentials(id).then(response => {
      setValueQR(response);
      setModalQr(true);
    });
  };

  const columns: TableColumn<TableEntity>[] = [
    {
      name: 'ID Mesa',
      selector: row => row.code
    },
    {
      name: 'Nombre',
      selector: row => row.name
    },
    {
      name: 'Opciones',
      cell: ({id}) =>
        (
          <div>
            <button onClick={() => handleQrOpen(id)}>Generar QR</button>
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
        )
    }
  ];

  return (
    <div className={styles.manager_table}>
      <h2>Gestion de mesas</h2>
      <button onClick={() => setModalQr(true)}>Generate qrt</button>
      <DataTableCustom<TableEntity>
        columns={columns}
        data={listTable}
      />
      <ModalPanel
        setOpenModal={setModalQr}
        openModal={modalQr}
      >
        <h2>Escanea el QR en tu dispositivo</h2>

        <QRCode
          size={256}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%'
          }}
          value={valueQr}
          viewBox={'0 0 256 256'}
        />
      </ModalPanel>
    </div>
  );
};
