import importerActions from '../../shared/importer/importerActions';
import selectors from './securityRoleImporterSelectors';
import SecurityRoleService from '../securityRoleService';
import fields from './securityRoleImporterFields';
import { i18n } from '../../../i18n';

const securityRoleImporterActions = importerActions(
  'SECURITYROLE_IMPORTER',
  selectors,
  SecurityRoleService.import,
  fields,
  i18n('entities.securityRole.importer.fileName'),
);

export default securityRoleImporterActions;