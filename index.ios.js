import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import { fetchSchedules } from './actions'
import App from './containers/App.js'

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
)

const eventify = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

store.dispatch(fetchSchedules())

AppRegistry.registerComponent('eventify', () => eventify)
