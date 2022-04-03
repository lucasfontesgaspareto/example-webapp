import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from '../../i18n';
import auditLogSelectors from '../../modules/auditLog/auditLogSelectors';
import TabsLink from '../layout/TabsLink';

function SettingsFormToolbar(props) {
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );

  return (
    <div className="mb-4">
      {hasPermissionToAuditLogs && (
        <TabsLink to="/audit-logs" options={{ query: 'entityNames=settings' }}>
          <button
            className="text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faHistory}
            />
            {i18n('auditLog.menu')}
          </button>
        </TabsLink>
      )}
    </div>
  );
}

export default SettingsFormToolbar;
