import { createSelector } from 'reselect';

const selectRaw = (state) => state.layout;

const selectMenuVisible = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.menuVisible),
);

const selectDarkMode = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.darkMode),
);

const selectLoading = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.loading),
);

const selectLanguage = createSelector(
  [selectRaw],
  (layout) => layout.language,
);

const selectTabs = createSelector(
  [selectRaw],
  (layout) => layout.tabs,
);

const selectActiveTab = createSelector(
  [selectRaw],
  (layout) => layout.activeTab,
);

const layoutSelectors = {
  selectRaw,
  selectMenuVisible,
  selectLoading,
  selectLanguage,
  selectDarkMode,
  selectTabs,
  selectActiveTab,
};

export default layoutSelectors;
