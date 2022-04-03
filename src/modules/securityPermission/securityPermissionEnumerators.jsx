const securityPermissionEnumerators = {
  entity: [
    'tenant',
    'plan',
    'user',
    'auditLog',
    'settings',
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
