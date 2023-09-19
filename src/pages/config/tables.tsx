import BackOfficeLayout from '@/components/layouts/back-office';
import { ManagerTable } from '@/components/features/configuration/manager-table/manager-table';
import {ReactElement} from 'react';

const Users = () => {
  return (
    <div>
      <ManagerTable />
    </div>
  );
};

Users.getLayout = function getLayout(page:ReactElement) {
  return (
    <BackOfficeLayout>
      {page}
    </BackOfficeLayout>
  );
};

export default Users;
