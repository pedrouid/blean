import React from 'react';
import { Route, Miss } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => (
  <div>
    <Route exact path="/" component={Home} />

    <Miss component={NotFound} />
  </div>
);

export default Router;
