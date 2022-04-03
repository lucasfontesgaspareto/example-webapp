import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/securityPermission/importer/securityPermissionImporterActions';
import fields from '../../../modules/securityPermission/importer/securityPermissionImporterFields';
import selectors from '../../../modules/securityPermission/importer/securityPermissionImporterSelectors';
import Breadcrumb from '../../shared/Breadcrumb';
import importerHoc from '../../shared/importer/Importer';

function SecurityPermissionImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.securityPermission.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityPermission.menu'), '/security-permission'],
          [i18n('entities.securityPermission.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.securityPermission.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default SecurityPermissionImportPage;
