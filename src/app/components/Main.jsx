import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedDashboard } from './Dashboard';
import { store } from '../store';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';

export default function Main() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="container mt-3">
          <ConnectedNavigation />
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={() => <ConnectedDashboard />}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
