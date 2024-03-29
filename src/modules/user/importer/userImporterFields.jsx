import { i18n } from '../../../i18n';
import schemas from '../../shared/yup/yupImporterSchemas';

export default [
  {
    name: 'email',
    label: i18n('user.fields.email'),
    schema: schemas.email(i18n('user.fields.email')),
  },
  {
    name: 'roles',
    label: i18n('user.fields.roles'),
    schema: schemas.stringArray(i18n('user.fields.roles')),
  },
];
