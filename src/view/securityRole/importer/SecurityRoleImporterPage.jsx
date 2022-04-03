import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/securityRole/importer/securityRoleImporterActions';
import fields from '../../../modules/securityRole/importer/securityRoleImporterFields';
import selectors from '../../../modules/securityRole/importer/securityRoleImporterSelectors';
import Breadcrumb from '../../shared/Breadcrumb';
import importerHoc from '../../shared/importer/Importer';

function SecurityRoleImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.securityRole.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityRole.menu'), '/security-role'],
          [i18n('entities.securityRole.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.securityRole.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default SecurityRoleImportPage;
