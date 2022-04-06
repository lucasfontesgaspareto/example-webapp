export default class AuthCurrentPermissions {
  static get() {
    const permissionsASString =
      localStorage.getItem('permissions') || null;

    if (permissionsASString) {
      return JSON.parse(permissionsASString);
    }

    return null;
  }

  static set(permissions) {
    if (!permissions) {
      return this.clear();
    }

    localStorage.setItem('permissions', JSON.stringify(permissions));
  }

  static clear() {
    localStorage.removeItem('permissions');
  }
}
