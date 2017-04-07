import React from 'react';
import { Route, Miss } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => (
  <div>
    <Route exact path="/" component={Login} />

    <Route exact path="/dashboard" component={Home} />

    <Miss component={NotFound} />
  </div>
);

export default Router;
