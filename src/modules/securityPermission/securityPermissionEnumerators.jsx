const securityPermissionEnumerators = {
  entity: [
    'tenant',
    'plan',
    'user',
    'auditLog',
    'settings',
    'securityRole',
    'securityPermission',
  ],
  action: [
    'Create',
    'Read',
    'Edit',
    'Destroy',
    'Import',
    'Autocomplete',
  ],
};

export default securityPermissionEnumerators;
