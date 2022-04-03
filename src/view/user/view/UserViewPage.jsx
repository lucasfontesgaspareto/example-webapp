import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import actions from '../../../modules/user/view/userViewActions';
import selectors from '../../../modules/user/view/userViewSelectors';
import Breadcrumb from '../../shared/Breadcrumb';
import UserView from './UserView';
import UserViewToolbar from './UserViewToolbar';

function UserViewPage(props) {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);
  const user = useSelector(selectors.selectUser);

  useEffect(() => {
    dispatch(actions.doFind(props.id));
  }, [dispatch, props.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu')],
          [i18n('user.menu')],
          [i18n('user.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.view.title')}
        </h1>

        <UserViewToolbar id={props.id} />

        <UserView loading={loading} user={user} />
      </div>
    </>
  );
}

export default UserViewPage;
