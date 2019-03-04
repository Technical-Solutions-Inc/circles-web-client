import React from 'react';
import { Route, IndexRoute } from 'react-router'

import EventsList from 'modules/EventsList';
import Event from 'modules/Event';
import AppRoot from 'modules/AppRoot';
import Home from 'modules/Home';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRoute component={Home} />
    <Route path="events" component={EventsList} />
    <Route path="events/(:id)" component={Event} />
  </Route>
)

