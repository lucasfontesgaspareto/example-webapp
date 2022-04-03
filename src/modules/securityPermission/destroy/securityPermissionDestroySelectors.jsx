import { createSelector } from 'reselect';

const selectRaw = (state) => state.securityPermission.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const securityPermissionDestroySelectors = {
  selectLoading,
};

export default securityPermissionDestroySelectors;
