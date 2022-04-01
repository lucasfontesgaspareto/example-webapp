import invitation from './invitation/tenantInvitationReducers';
import list from './list/tenantListReducers';
import form from './form/tenantFormReducers';
import destroy from './destroy/tenantDestroyReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  invitation,
  list,
  form,
  destroy,
});
