import list from './list/securityRoleListReducers';
import form from './form/securityRoleFormReducers';
import view from './view/securityRoleViewReducers';
import destroy from './destroy/securityRoleDestroyReducers';
import importerReducer from './importer/securityRoleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
