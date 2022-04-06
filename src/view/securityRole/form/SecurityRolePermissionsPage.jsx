import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/securityRole/form/securityRoleFormActions';
import selectors from '../../../modules/securityRole/form/securityRoleFormSelectors';
import { getHistory } from '../../../modules/store';
import SecurityRolePermissionsForm from './SecurityRolePermissionsForm';
import Breadcrumb from '../../shared/Breadcrumb';
import Spinner from '../../shared/Spinner';
import SecurityPermissionService from '../../../modules/securityPermission/securityPermissionService';

function SecurityRolePermissionsPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const [permissionsList, setPermissionsList] = useState([]);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const title = `${i18n('entities.securityPermission.label')}: ${record ? record.name : ''}`;

  useEffect(async () => {
    dispatch(actions.doInit(match.params.id));
    
    const { rows } = await SecurityPermissionService.list({})
    setPermissionsList(rows)

    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    dispatch(actions.doUpdate(id, data));
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityRole.menu'), '/security-role'],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {title}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <SecurityRolePermissionsForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            permissionsList={permissionsList}
            isEditing={true}
            onSubmit={doSubmit}
            onCancel={() => getHistory().goBack()}
          />
        )}
      </div>
    </>
  );
}

export default SecurityRolePermissionsPage;
