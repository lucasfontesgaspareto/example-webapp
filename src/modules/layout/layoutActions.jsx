import { setLanguageCode } from '../../i18n';

const prefix = 'LAYOUT';

const layoutActions = {
  MENU_TOGGLE: `${prefix}_MENU_TOGGLE`,
  MENU_HIDE: `${prefix}_MENU_HIDE`,
  MENU_SHOW: `${prefix}_MENU_SHOW`,

  DARK_MODE_CHANGE: `${prefix}_DARK_MODE`,

  ADD_TAB: `${prefix}_ADD_TAB`,
  REMOVE_TAB: `${prefix}_REMOVE_TAB`,
  ACTIVE_TAB: `${prefix}_ACTIVE_TAB`,

  doChangeLanguage: (language) => {
    setLanguageCode(language);

    /**
     * I18n is outside Redux store,
     * no we need this hack to load it properly
     */
    window.location.reload();
  },

  doDarkModeChange: (isDarkMode) => {
    return {
      type: layoutActions.DARK_MODE_CHANGE,
      payload: Boolean(isDarkMode),
    };
  },

  doToggleMenu: () => {
    return {
      type: layoutActions.MENU_TOGGLE,
    };
  },

  doShowMenu: () => {
    return {
      type: layoutActions.MENU_SHOW,
    };
  },

  doHideMenu: () => {
    return {
      type: layoutActions.MENU_HIDE,
    };
  },

  doAddTab: (tab) => {
    return {
      type: layoutActions.ADD_TAB,
      payload: tab,
    };
  },

  doRemoveTab: (tab) => {
    return {
      type: layoutActions.REMOVE_TAB,
      payload: tab,
    };
  },

  doActiveTab: (tab) => {
    return {
      type: layoutActions.ACTIVE_TAB,
      payload: tab,
    };
  },
};

export default layoutActions;
