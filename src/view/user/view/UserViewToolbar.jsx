import {
  faEdit,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import auditLogSelectors from '../../../modules/auditLog/auditLogSelectors';
import userSelectors from '../../../modules/user/userSelectors';
import selectors from '../../../modules/user/view/userViewSelectors';
import TabsLink from '../../layout/TabsLink';

function UserViewToolbar(props) {
  const user = useSelector(selectors.selectUser);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    userSelectors.selectPermissionToEdit,
  );

  const id = props.id;

  return (
    <div className="mb-4">
      {hasPermissionToEdit && (
        <TabsLink to="/user/:id/edit" options={{ id }}>
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faEdit}
            />
            {i18n('common.edit')}
          </button>
        </TabsLink>
      )}

      {hasPermissionToAuditLogs && (
        <TabsLink
          to="/audit-logs" options={{ query: `entityId=${encodeURIComponent(id)}` }}
        >
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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

      {user && user.email && hasPermissionToAuditLogs && (
        <TabsLink
          to="/audit-logs" options={{ query: `createdByEmail=${encodeURIComponent(user.email)}` }}
        >
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faEye}
            />
            {i18n('user.view.activity')}
          </button>
        </TabsLink>
      )}
    </div>
  );
}

export default UserViewToolbar;
