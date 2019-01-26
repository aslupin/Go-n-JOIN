import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import 'bootstrap/dist/css/bootstrap.css'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers'
import RouteCustom from './Route'

import * as serviceWorker from './serviceWorker'

// const store = createStore(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouteCustom />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
