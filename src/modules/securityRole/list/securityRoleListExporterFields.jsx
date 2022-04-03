import { i18n } from '../../../i18n';
import exporterRenders from '../../shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.securityRole.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.securityRole.fields.name'),
  },
  {
    name: 'active',
    label: i18n('entities.securityRole.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'permissions',
    label: i18n('entities.securityRole.fields.permissions'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.securityRole.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.securityRole.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
