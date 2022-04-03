import { i18n } from '../../../i18n';
import exporterRenders from '../../shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.securityPermission.fields.id'),
  },
  {
    name: 'key',
    label: i18n('entities.securityPermission.fields.key'),
  },
  {
    name: 'entity',
    label: i18n('entities.securityPermission.fields.entity'),
  },
  {
    name: 'action',
    label: i18n('entities.securityPermission.fields.action'),
  },
  {
    name: 'allowedRoles',
    label: i18n('entities.securityPermission.fields.allowedRoles'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.securityPermission.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.securityPermission.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
