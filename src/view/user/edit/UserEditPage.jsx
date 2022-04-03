import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import layoutActions from '../../../modules/layout/layoutActions';
import { getHistory } from '../../../modules/store';
import actions from '../../../modules/user/form/userFormActions';
import selectors from '../../../modules/user/form/userFormSelectors';
import Breadcrumb from '../../shared/Breadcrumb';
import Spinner from '../../shared/Spinner';
import UserEditForm from '../../user/edit/UserEditForm';

function UserEditPage(props) {
  const dispatch = useDispatch();

  const [dispatched, setDispatched] = useState(false);

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const user = useSelector(selectors.selectUser);

  useEffect(() => {
    dispatch(actions.doInit(props.id));
    setDispatched(true);
  }, [dispatch, props.id]);

  const doRemoveTab = (tab) => {
    dispatch(layoutActions.doRemoveTab(tab))
  }

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu')],
          [i18n('user.menu')],
          [i18n('user.edit.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.edit.title')}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <UserEditForm
            user={user}
            saveLoading={saveLoading}
            onCancel={() => doRemoveTab('/user/:id/edit')}
          />
        )}
      </div>
    </>
  );
}

export default UserEditPage;
