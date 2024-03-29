import React from 'react';
import Roles from '../../../security/roles';
import Spinner from '../../shared/Spinner';
import CustomViewItem from '../../shared/view/CustomViewItem';
import ImagesViewItem from '../../shared/view/ImagesViewItem';
import TextViewItem from '../../shared/view/TextViewItem';
import UserStatusView from './UserStatusView';
import { i18n } from '../../../i18n';

function UserView(props) {
  const { user, loading } = props;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('user.fields.email')}
        value={user.email}
      />
      <TextViewItem
        label={i18n('user.fields.firstName')}
        value={user.firstName}
      />
      <TextViewItem
        label={i18n('user.fields.lastName')}
        value={user.lastName}
      />
      <TextViewItem
        label={i18n('user.fields.phoneNumber')}
        value={user.phoneNumber}
        prefix={'+'}
      />

      <ImagesViewItem
        label={i18n('user.fields.avatars')}
        value={user.avatars}
      />

      <CustomViewItem
        label={i18n('user.fields.roles')}
        value={user.roles}
        render={(value) =>
          value.map((roleId) => (
            <div key={roleId}>
              <span>{Roles.labelOf(roleId)}</span>
            </div>
          ))
        }
      />

      <CustomViewItem
        label={i18n('user.fields.status')}
        value={user.status}
        render={(value) => <UserStatusView value={value} />}
      />
    </div>
  );
}

export default UserView;
