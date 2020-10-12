import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}
