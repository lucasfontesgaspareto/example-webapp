import { createSelector } from 'reselect';

const selectRaw = (state) => state.securityRole.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const securityRoleViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default securityRoleViewSelectors;
