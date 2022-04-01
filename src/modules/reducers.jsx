import { connectRouter } from 'connected-react-router';
import layout from './layout/layoutReducers';
import auth from './auth/authReducers';
import tenant from './tenant/tenantReducers';
import plan from './plan/planReducers';
import user from './user/userReducers';
import auditLog from './auditLog/auditLogReducers';
import settings from './settings/settingsReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
  });
