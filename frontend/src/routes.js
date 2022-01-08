import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Adoption from './pages/Adoption';

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon}>
        </Route>
        <Route path="/register" component={Register}>
        </Route>
        <Route path="/profile" component={Profile}>
        </Route>
        <Route path="/adoption" component={Adoption}>
        </Route>
      </Switch>


    </BrowserRouter>
  );
}