import React from 'react';
import { i18n } from '../../../i18n';
import Breadcrumb from '../../shared/Breadcrumb';
import UserFilter from './UserFilter';
import UserTable from './UserTable';
import UserToolbar from './UserToolbar';

function UserPage() {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu')],
        ]}
      />
      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.title')}
        </h1>

        <UserToolbar />
        <UserFilter />
        <UserTable />
      </div>
    </>
  );
}

export default UserPage;
