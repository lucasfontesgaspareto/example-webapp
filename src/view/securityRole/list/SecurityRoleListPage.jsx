import React from 'react';
import { i18n } from '../../../i18n';
import SecurityRoleListFilter from '../../securityRole/list/SecurityRoleListFilter';
import SecurityRoleListTable from '../../securityRole/list/SecurityRoleListTable';
import SecurityRoleListToolbar from '../../securityRole/list/SecurityRoleListToolbar';
import Breadcrumb from '../../shared/Breadcrumb';

function SecurityRoleListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityRole.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.securityRole.list.title')}
        </h1>
        <SecurityRoleListToolbar />
        <SecurityRoleListFilter />
        <SecurityRoleListTable />
      </div>
    </>
  );
}

export default SecurityRoleListPage;
