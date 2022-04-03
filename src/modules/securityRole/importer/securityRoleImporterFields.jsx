import schemas from '../../shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.securityRole.fields.name'),
    schema: schemas.string(
      i18n('entities.securityRole.fields.name'),
      {
        "required": true,
        "max": 60
      },
    ),
  },
  {
    name: 'active',
    label: i18n('entities.securityRole.fields.active'),
    schema: schemas.boolean(
      i18n('entities.securityRole.fields.active'),
      {},
    ),
  },
  {
    name: 'permissions',
    label: i18n('entities.securityRole.fields.permissions'),
    schema: schemas.relationToMany(
      i18n('entities.securityRole.fields.permissions'),
      {},
    ),
  },
];