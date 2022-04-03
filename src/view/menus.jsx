import Permissions from '../security/permissions';
import { i18n } from '../i18n';
import config from '../config';
import {
  faCog,
  faCreditCard,
  faHistory,
  faThLarge,
  faUserPlus,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCreditCard,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUserPlus,
  },

  {
    path: '/audit-logs',
    icon: faHistory,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: faCog,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/security-role',
    permissionRequired: permissions.securityRoleRead,
    icon: faChevronRight,
    label: i18n('entities.securityRole.menu'),
  },

  {
    path: '/security-permission',
    permissionRequired: permissions.securityPermissionRead,
    icon: faChevronRight,
    label: i18n('entities.securityPermission.menu'),
  },  
].filter(Boolean);
