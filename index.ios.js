import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/App.js'

const store = createStore(
  // TODO: Add reducers
  //reducer,
  applyMiddleware(thunk),
)

const eventify = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('eventify', () => eventify)
