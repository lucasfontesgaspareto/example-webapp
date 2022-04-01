import { createSelector } from 'reselect';
import authSelectors from '../auth/authSelectors';
import PermissionChecker from '../auth/permissionChecker';
import Permissions from '../../security/permissions';
import Plans from '../../security/plans';

const selectRaw = (state) => state.plan;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectPermissionToEdit = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.planEdit,
    ),
);

const selectIsPlanUser = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) => {
    if (
      currentTenant.plan !== Plans.values.free &&
      currentTenant.planStatus !== 'cancel_at_period_end' &&
      currentTenant.planUserId !== currentUser.id
    ) {
      return false;
    }

    return true;
  },
);

const planSelectors = {
  selectPermissionToEdit,
  selectIsPlanUser,
  selectLoading,
  selectRaw,
};

export default planSelectors;
