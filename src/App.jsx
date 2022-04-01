import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import {
  configureStore,
  getHistory,
} from './modules/store'

import RoutesComponent from './view/shared/routes/RoutesComponent'
import layoutSelectors from './modules/layout/layoutSelectors'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <AppInnerComponent />
      </ConnectedRouter>
    </Provider>
  )
}

const AppInnerComponent = () => {
  const isDarkMode = useSelector(
    layoutSelectors.selectDarkMode,
  )

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <RoutesComponent />
    </div>
  )
}

export default App