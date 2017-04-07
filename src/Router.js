import React from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';

const Router = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);

export default Router;
