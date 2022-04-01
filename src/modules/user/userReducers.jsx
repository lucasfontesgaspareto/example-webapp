import list from './list/userListReducers';
import form from './form/userFormReducers';
import view from './view/userViewReducers';
import importerReducer from './importer/userImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  importer: importerReducer,
});
