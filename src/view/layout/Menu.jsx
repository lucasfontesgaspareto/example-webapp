import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from '../../i18n';
import {
  default as authSelectors,
  default as selectors,
} from '../../modules/auth/authSelectors';
import PermissionChecker from '../../modules/auth/permissionChecker';
import layoutActions from '../../modules/layout/layoutActions';
import actions from '../../modules/layout/layoutActions';
import layoutSelectors from '../../modules/layout/layoutSelectors';
import menus from '../menus';import {
  faChevronDown,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

const ItemGroup = ({
  menu,
  index,
  selectedKeys,
  children,
}) => {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const isSelected = menu.children.some(child => selectedKeys.includes(child.path))
    setSelected(isSelected)
    setExpanded(isSelected)
  }, [menu, selectedKeys])
  
  return <div>
    <div
      className={`flex items-center justify-between ${index !== 0 ? 'mt-4' : ''} ${
        selected
          ? 'px-4 py-2 rounded-md bg-gray-700 text-gray-200'
          : 'px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200'
      }`}
      onClick={(event) => {
        console.log("onClick.ItemGroup")
        event.stopPropagation()
        setExpanded(!expanded)
      }}
    >
      <div>
        <FontAwesomeIcon
          className="w-5 h-5"
          icon={menu.icon}
        />
        <span className="mx-4 font-medium truncate">
          {menu.label}
        </span>
      </div>
      
      <div>
        {expanded ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
    </div>

    <div className={`${expanded ? 'block' : 'hidden'}`}>
      {children}
    </div>
  </div>
}

const ItemLink = ({ index, menu, onClick, selectedKeys, group }) => {
  return <span
      data-tip={menu.label}
      data-for="item-link-menu"
    >
      <Link
        className={`${group ? 'ml-4' : ''} ${index !== 0 ? 'mt-4' : ''} ${
          selectedKeys.includes(menu.path)
            ? 'flex items-center px-4 py-2 rounded-md bg-gray-700 text-gray-200'
            : 'flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200'
        }`}
        onClick={(event) => {
          console.log("onClick.ItemLink")
          event.stopPropagation()
          onClick && onClick(event)
        }}
        key={menu.path}
        to={menu.path}
      >
        <FontAwesomeIcon
          className="w-5 h-5"
          icon={menu.icon}
        />

        <span className="mx-4 font-medium truncate">
          {menu.label}
        </span>
      </Link>

      <ReactTooltip id="item-link-menu" />
    </span>
}

function Menu(props) {
  const [selectedKeys, setSelectedKeys] = useState([])

  const dispatch = useDispatch();

  const logoUrl = useSelector(selectors.selectLogoUrl);

  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );

  const doToggleMenuIfSmall = () => {
    if (window.innerWidth < 640) {
      dispatch(layoutActions.doToggleMenu());
    }
  };

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  useLayoutEffect(() => {
    const toggleMenuOnResize = () => {
      window.innerWidth < 640
        ? dispatch(actions.doHideMenu())
        : dispatch(actions.doShowMenu());
    };

    toggleMenuOnResize();

    window.addEventListener('resize', toggleMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
  }, [dispatch]);

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
      permission,
    );
  };

  useEffect(() => {
    const url = props.url;
    
    let subMatch;
    const match = menus.find((option) => {
      if (option.exact) {
        if (option.children?.length) {
          return option.children?.find(child => {
            if (child.path === url) {
              subMatch = {
                path: child.path
              }

              return true
            }

            return false
          })
        }

        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/')
      );
    });

    if (subMatch) {
      setSelectedKeys([subMatch.path])
      return
    }

    if (match) {
      setSelectedKeys([match.path])
      return
    }
    
    setSelectedKeys([])
  }, [props.url, menus])

  return (
    <div
      className={`${
        menuVisible ? 'flex flex-col w-full' : 'hidden'
      } sm:w-64 md:w-64 lg:w-64 flex-shrink-0 min-h-screen px-4 py-4 border-0 sm:border-r md:border-r lg:border-r bg-gray-800 dark:border-gray-600`}
    >
      <div className="w-full flex justify-between sm:justify-center md:justify-center lg:justify-center items-center">
        <Link onClick={doToggleMenuIfSmall} to="/">
          {logoUrl ? (
            <img
              src={logoUrl}
              className="w-72 max-h-14 object-cover"
              alt={i18n('app.title')}
            />
          ) : (
            <div className="text-center text-3xl font-semibold text-gray-200 hover:text-white">
              <>{i18n('app.title')}</>
            </div>
          )}
        </Link>
        <div className="cursor-pointer block sm:hidden md:hidden lg:hidden text-gray-400 hover:text-gray-200 text-lg mr-2">
          <FontAwesomeIcon
            onClick={doToggleMenuIfSmall}
            icon={faTimes}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {menus
            .filter((menu) =>
              match(menu.permissionRequired),
            )
            .map((menu, index) => {
              if (menu.group) {
                return <ItemGroup
                  key={index}
                  menu={menu}
                  index={index}
                  selectedKeys={selectedKeys}
                >
                  {menu.children.map((menu, index) => <ItemLink
                    group
                    key={index}
                    menu={menu}
                    index={index + 1}
                    selectedKeys={selectedKeys}
                    onClick={(event) => {
                      event.stopPropagation()
                      doToggleMenuIfSmall()
                    }}
                  />)}
                </ItemGroup>
              }

              return <ItemLink
                key={index}
                menu={menu}
                index={index}
                selectedKeys={selectedKeys}
                onClick={doToggleMenuIfSmall}
              />
            })
          }

          {menus
            .filter((menu) =>
              lockedForCurrentPlan(menu.permissionRequired),
            )
            .map((menu) => (
              <div
                className={`mt-4 opacity-50 flex items-center px-4 py-2 text-gray-600 rounded-md dark:text-gray-400`}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={menu.icon}
                />
                <span className="mx-4 font-medium truncate">
                  {menu.label}
                </span>
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
}

export default Menu;
