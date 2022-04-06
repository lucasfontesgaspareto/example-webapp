import Roles from './roles';
import Plans from './plans';
import Storage from './storage';
import AuthCurrentPermissions from '../modules/auth/authCurrentPermissions';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

const DEFUALT_VALUES = {
  tenantEdit: {
    id: 'tenantEdit',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  tenantDestroy: {
    id: 'tenantDestroy',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  planEdit: {
    id: 'planEdit',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  planRead: {
    id: 'planRead',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userEdit: {
    id: 'userEdit',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userDestroy: {
    id: 'userDestroy',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userCreate: {
    id: 'userCreate',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userImport: {
    id: 'userImport',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userRead: {
    id: 'userRead',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  userAutocomplete: {
    id: 'userAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  auditLogRead: {
    id: 'auditLogRead',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
  },
  settingsEdit: {
    id: 'settingsEdit',
    allowedRoles: [roles.admin],
     allowedPlans: [
      plans.free,
      plans.growth,
      plans.enterprise,
    ],
    allowedStorage: [
      storage.settingsBackgroundImages,
      storage.settingsLogos,
    ],
  },
  
  securityRoleImport: {
    id: 'securityRoleImport',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },
  securityRoleCreate: {
    id: 'securityRoleCreate',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityRoleEdit: {
    id: 'securityRoleEdit',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityRoleDestroy: {
    id: 'securityRoleDestroy',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityRoleRead: {
    id: 'securityRoleRead',
    allowedRoles: [roles.admin, roles.custom],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },
  securityRoleAutocomplete: {
    id: 'securityRoleAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },

  securityPermissionImport: {
    id: 'securityPermissionImport',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },
  securityPermissionCreate: {
    id: 'securityPermissionCreate',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityPermissionEdit: {
    id: 'securityPermissionEdit',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityPermissionDestroy: {
    id: 'securityPermissionDestroy',
    allowedRoles: [roles.admin],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
    allowedStorage: [

    ],
  },
  securityPermissionRead: {
    id: 'securityPermissionRead',
    allowedRoles: [roles.admin, roles.custom],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },
  securityPermissionAutocomplete: {
    id: 'securityPermissionAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
    allowedPlans: [plans.free, plans.growth, plans.enterprise],
  },
}

class Permissions {
  static get values() {
    return AuthCurrentPermissions.get() || DEFUALT_VALUES
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
