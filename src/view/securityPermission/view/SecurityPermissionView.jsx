import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../shared/Spinner';
import TextViewItem from '../../shared/view/TextViewItem';
import SecurityRoleViewItem from '../../securityRole/view/SecurityRoleViewItem';

function SecurityPermissionView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.securityPermission.fields.key')}
        value={record.key}
      />

      <TextViewItem
        label={i18n('entities.securityPermission.fields.entity')}
        value={
          record.entity &&
          i18n(
            `entities.securityPermission.enumerators.entity.${record.entity}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.securityPermission.fields.action')}
        value={
          record.action &&
          i18n(
            `entities.securityPermission.enumerators.action.${record.action}`,
          )
        }
      />

      <SecurityRoleViewItem
        label={i18n('entities.securityPermission.fields.allowedRoles')}
        value={record.allowedRoles}
      />
    </div>
  );
}

export default SecurityPermissionView;
