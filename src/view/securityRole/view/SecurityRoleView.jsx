import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../shared/Spinner';
import TextViewItem from '../../shared/view/TextViewItem';
import SecurityPermissionViewItem from '../../securityPermission/view/SecurityPermissionViewItem';

function SecurityRoleView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.securityRole.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.securityRole.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default SecurityRoleView;
