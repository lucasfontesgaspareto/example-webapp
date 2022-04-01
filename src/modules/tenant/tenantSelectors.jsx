import { createSelector } from 'reselect';
import authSelectors from '../auth/authSelectors';
import PermissionChecker from '../auth/permissionChecker';
import Permissions from '../../security/permissions';

const selectPermissionToEdit = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) => (tenant) =>
    new PermissionChecker(tenant, currentUser).match(
      Permissions.values.tenantEdit,
    ),
);

const selectPermissionToDestroy = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) => (tenant) =>
    new PermissionChecker(tenant, currentUser).match(
      Permissions.values.tenantDestroy,
    ),
);

const selectInvitationToken = createSelector(
  [authSelectors.selectCurrentUser],
  (currentUser) => (tenant) => {
    if (!currentUser || !currentUser.tenants) {
      return false;
    }

    const tenantUser = currentUser.tenants.find(
      (tenantUser) =>
        tenantUser.tenant.id === tenant.id &&
        tenantUser.status === 'invited',
    );

    if (!tenantUser) {
      return null;
    }

    return tenantUser.invitationToken;
  },
);

const tenantSelectors = {
  selectPermissionToEdit,
  selectPermissionToDestroy,
  selectInvitationToken,
};

export default tenantSelectors;
