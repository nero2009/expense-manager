import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import TestLogin from '../components/TestLogin';
import { Modal } from '../components/Login';
import Typist from '../components/Typist/Typist';
import Register from '../components/Register'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={Register} exact={true} />
        <PublicRoute path="/register" component={Register}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
