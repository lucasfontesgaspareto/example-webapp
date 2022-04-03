import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/securityPermission/view/securityPermissionViewActions';
import selectors from '../../../modules/securityPermission/view/securityPermissionViewSelectors';
import SecurityPermissionView from '../../securityPermission/view/SecurityPermissionView';
import SecurityPermissionViewToolbar from '../../securityPermission/view/SecurityPermissionViewToolbar';
import Breadcrumb from '../../shared/Breadcrumb';

function SecurityPermissionPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityPermission.menu'), '/security-permission'],
          [i18n('entities.securityPermission.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.securityPermission.view.title')}
        </h1>

        <SecurityPermissionViewToolbar match={match} />

        <SecurityPermissionView loading={loading} record={record} />
      </div>
    </>
  );
}

export default SecurityPermissionPage;
