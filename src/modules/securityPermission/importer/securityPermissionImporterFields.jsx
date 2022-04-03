import schemas from '../../shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';
import securityPermissionEnumerators from '../securityPermissionEnumerators';

export default [
  {
    name: 'key',
    label: i18n('entities.securityPermission.fields.key'),
    schema: schemas.string(
      i18n('entities.securityPermission.fields.key'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'entity',
    label: i18n('entities.securityPermission.fields.entity'),
    schema: schemas.enumerator(
      i18n('entities.securityPermission.fields.entity'),
      {
        "required": true,
        "options": securityPermissionEnumerators.entity
      },
    ),
  },
  {
    name: 'action',
    label: i18n('entities.securityPermission.fields.action'),
    schema: schemas.enumerator(
      i18n('entities.securityPermission.fields.action'),
      {
        "required": true,
        "options": securityPermissionEnumerators.action
      },
    ),
  },
  {
    name: 'allowedRoles',
    label: i18n('entities.securityPermission.fields.allowedRoles'),
    schema: schemas.relationToMany(
      i18n('entities.securityPermission.fields.allowedRoles'),
      {},
    ),
  },
];