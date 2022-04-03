import React from 'react';
import TabsComponent from 'rc-tabs';
import { useDispatch, useSelector } from 'react-redux';

import layoutSelectors from '../../modules/layout/layoutSelectors';
import layoutActions from '../../modules/layout/layoutActions';

const TabBar = (props) => {
  const dispatch = useDispatch()

  const activeTab = useSelector(layoutSelectors.selectActiveTab);

  const doActiveTab = (tab) => {
    dispatch(layoutActions.doActiveTab(tab))
  }

  const doRemoveTab = (tab) => {
    dispatch(layoutActions.doRemoveTab(tab))
  }

  return (
    <div className="flex flex-wrap mb-3">
      {props.panes.map(pane => {
        const key = pane.key;
        const title = pane.props.title;

        return <div
          className={`bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded mr-2 my-1 border ${key === activeTab ? 'border-gray-800 dark:border-gray-200' : 'dark:border-gray-800'}`}
          key={key}
        >
          <span
            onClick={(event) => {
              doActiveTab(key)
              props.onTabClick(key, event)
            }}
          >
            {title}
          </span>
          <span
            className="ml-2 px-1 bg-red-500 rounded cursor-pointer"
            onClick={() => {
              doRemoveTab(key)
            }}
          >x</span>
        </div>
      })}
    </div>
  );
};;

const Tabs = (props) => {
  const tabs = useSelector(layoutSelectors.selectTabs);
  const activeTab = useSelector(layoutSelectors.selectActiveTab);

  return (
    <>
      <TabsComponent defaultActiveKey="" activeKey={activeTab} renderTabBar={TabBar}>
        {
          tabs.map(tab => {
            return <TabsComponent.TabPane title={tab.name} key={tab.id}>
              <tab.Component {...tab.options} />
            </TabsComponent.TabPane>
          })
        }
      </TabsComponent>
    </>
  );
};

export default Tabs;
