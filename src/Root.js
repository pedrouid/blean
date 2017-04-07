import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import ReduxReset from './libraries/redux-reset';
import reducers from './redux';
import Router from './Router';

const history = createHistory();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(ReduxThunk, routerMiddleware(history), ReduxReset())
  )
);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);

export default Root;
