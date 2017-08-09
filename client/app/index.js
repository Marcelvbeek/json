import thunkMiddleware from 'redux-thunk'
import React from 'react';
import {render} from 'react-dom';
import App from './components/app/index.js';
import LoginContainer from './components/auth/login/login.container';
import AddAccountContainer from './components/auth/add-account/add-account.container';
import JsonContainer from './components/json-viewer/json-viewer.container';
import Button from './components/inputs/button.component';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import authentication from './reducers/auth';

const reducer = combineReducers({
  authentication,
  routing: routerReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(
      thunkMiddleware
  )
)
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <div>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginContainer}/>
                <Route path="/jsonviewer" component={JsonContainer}/>
                <Route path="/add-account" component={AddAccountContainer}/>
            </Route>
        </Router>
        </div>
    </Provider>,
    document.getElementById('app')
);