import React from 'react';
import { i18n } from '../../../i18n';
import SecurityPermissionListFilter from '../../securityPermission/list/SecurityPermissionListFilter';
import SecurityPermissionListTable from '../../securityPermission/list/SecurityPermissionListTable';
import SecurityPermissionListToolbar from '../../securityPermission/list/SecurityPermissionListToolbar';
import Breadcrumb from '../../shared/Breadcrumb';

function SecurityPermissionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityPermission.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.securityPermission.list.title')}
        </h1>
        <SecurityPermissionListToolbar />
        <SecurityPermissionListFilter />
        <SecurityPermissionListTable />
      </div>
    </>
  );
}

export default SecurityPermissionListPage;
