import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import actions from '../../../modules/user/form/userFormActions';
import selectors from '../../../modules/user/form/userFormSelectors';
import Breadcrumb from '../../shared/Breadcrumb';
import UserNewForm from './UserNewForm';

function UserNewPage(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  useEffect(() => {
    dispatch(actions.doInit());
  }, [dispatch]);

  const doSubmit = (id, data) => {
    dispatch(actions.doAdd(data));
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.new.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.new.title')}
        </h1>

        <UserNewForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={() => getHistory().push('/user')}
        />
      </div>
    </>
  );
}

export default UserNewPage;
