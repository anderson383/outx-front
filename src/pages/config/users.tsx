import { ManagerUser } from '@/components/features/manager-user/manager-user';
import BackOfficeLayout from '@/components/layouts/back-office';
import { DataTableCustom } from '@/components/ui/molecules/custom-data-table/custom-data-table';
import {ReactElement} from 'react';

const Users = () => {
  return (
    <div>
      <ManagerUser />
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
