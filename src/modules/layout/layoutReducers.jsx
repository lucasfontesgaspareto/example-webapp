import actions from './layoutActions';
import { getLanguageCode } from '../../i18n';
import LayoutDarkMode from './layoutDarkMode';

const initialData = {
  menuVisible: true,
  language: getLanguageCode(),
  loading: false,
  darkMode: LayoutDarkMode.get(),
  tabs: [],
  activeTab: null,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.DARK_MODE_CHANGE) {
    LayoutDarkMode.set(payload);

    return {
      ...state,
      darkMode: payload,
    };
  }

  if (type === actions.MENU_TOGGLE) {
    return {
      ...state,
      menuVisible: !state.menuVisible,
    };
  }

  if (type === actions.MENU_SHOW) {
    return {
      ...state,
      menuVisible: true,
    };
  }

  if (type === actions.MENU_HIDE) {
    return {
      ...state,
      menuVisible: false,
    };
  }

  if (type === actions.ADD_TAB) {
    let tabsUpdated;

    const exists = state.tabs.find(tab => tab.path === payload.path)

    if (exists) {
      tabsUpdated = state.tabs.map(tab => {
        if (tab.path === payload.path) {
          payload.id = tab.id

          return {
            ...tab,
            ...payload,
          }
        }

        return tab
      })
    } else {
      payload.id = (Math.random() * 1000000).toString(16)
      tabsUpdated = state.tabs.concat(payload)
    }
    
    return {
      ...state,
      tabs: tabsUpdated,
      activeTab: payload.id,
    };
  }

  if (type === actions.REMOVE_TAB) {
    let tabsUpdated = state.tabs.filter(tab => tab.id !== payload)

    if (tabsUpdated.length === state.tabs.length) { // try remove by path
      tabsUpdated = state.tabs.filter(tab => tab.path !== payload)
    }

    return {
      ...state,
      tabs: tabsUpdated,
      activeTab: tabsUpdated.length && tabsUpdated[tabsUpdated.length - 1].id,
    };
  }

  if (type === actions.ACTIVE_TAB) {
    return {
      ...state,
      activeTab: payload,
    };
  }

  return state;
};
