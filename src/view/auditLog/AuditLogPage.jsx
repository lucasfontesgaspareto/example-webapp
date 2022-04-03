import React from 'react';
import { i18n } from '../../i18n';
import AuditLogFilter from '../auditLog/AuditLogFilter';
import AuditLogTable from '../auditLog/AuditLogTable';
import AuditLogToolbar from '../auditLog/AuditLogToolbar';
import Breadcrumb from '../shared/Breadcrumb';

function AuditLogPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu')],
          [i18n('auditLog.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('auditLog.title')}
        </h1>
        <AuditLogToolbar />
        <AuditLogFilter query={props.query} />
        <AuditLogTable />
      </div>
    </>
  );
}

export default AuditLogPage;
