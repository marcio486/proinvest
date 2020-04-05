import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

import PaginaAtivos from './pages/PaginaAtivos';

import PureComponent from './pages/PaginaAtivos/teste'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/results' exact component={PaginaAtivos} />
      <Route path='/teste' exact component={PureComponent} />
    </Switch>
  );  
}