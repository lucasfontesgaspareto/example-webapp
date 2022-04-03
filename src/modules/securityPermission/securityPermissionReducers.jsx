import list from './list/securityPermissionListReducers';
import form from './form/securityPermissionFormReducers';
import view from './view/securityPermissionViewReducers';
import destroy from './destroy/securityPermissionDestroyReducers';
import importerReducer from './importer/securityPermissionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
