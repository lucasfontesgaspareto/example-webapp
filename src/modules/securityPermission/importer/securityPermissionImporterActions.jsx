import importerActions from '../../shared/importer/importerActions';
import selectors from './securityPermissionImporterSelectors';
import SecurityPermissionService from '../securityPermissionService';
import fields from './securityPermissionImporterFields';
import { i18n } from '../../../i18n';

const securityPermissionImporterActions = importerActions(
  'SECURITYPERMISSION_IMPORTER',
  selectors,
  SecurityPermissionService.import,
  fields,
  i18n('entities.securityPermission.importer.fileName'),
);

export default securityPermissionImporterActions;