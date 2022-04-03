import { createSelector } from 'reselect';

const selectRaw = (state) => state.securityRole.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const securityRoleDestroySelectors = {
  selectLoading,
};

export default securityRoleDestroySelectors;
