import React from 'react';
import { i18n } from '../../i18n';
import ProfileForm from '../auth/ProfileForm';
import Breadcrumb from '../shared/Breadcrumb';
import { useDispatch } from 'react-redux';
import layoutActions from '../../modules/layout/layoutActions';

function ProfileFormPage() {
  const dispatch = useDispatch();

  const doRemoveTab = (tab) => {
    dispatch(layoutActions.doRemoveTab(tab))
  }

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu')],
          [i18n('auth.profile.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('auth.profile.title')}
        </h1>

        <ProfileForm
          onCancel={() => doRemoveTab('/profile')}
        />
      </div>
    </>
  );
}

export default ProfileFormPage;
