import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Base from './layouts/Base';
// import Dashboard from './layouts/Dashboard';
import NotFound from './pages/NotFound';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={Base} />
    {/* <Route exact path={'/dashboard'} component={Dashboard} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Router;
