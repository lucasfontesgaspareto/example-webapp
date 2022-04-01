import importerActions from '../../shared/importer/importerActions';
import selectors from '../importer/userImporterSelectors';
import UserService from '../userService';
import fields from '../importer/userImporterFields';
import { i18n } from '../../../i18n';

const userImporterActions = importerActions(
  'USER_IMPORTER',
  selectors,
  UserService.import,
  fields,
  i18n('user.importer.fileName'),
);

export default userImporterActions;