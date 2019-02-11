import React from 'react';
import { BrowserRouter,Router, Route, Switch ,Link, NavLink  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import IndecisionApp from '../components/IndecisionApp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
      <PublicRoute path="/" component={IndecisionApp} exact={true} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>


);

export default AppRouter;
