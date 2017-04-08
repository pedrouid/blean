import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import ReduxReset from './libraries/redux-reset';
import reducers from './redux';
import Pages from './pages';
import Dashboard from './dashboard';

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk), ReduxReset())
);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/get-started" />} />
        <Route exact path={'/:route'} component={Pages} />
        <Route exact path={'/dashboard/:route'} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
