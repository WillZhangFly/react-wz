import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedDashboard } from './Dashboard';
import { store } from '../store';
import {Router, Route} from "react-router-dom";
import { history } from "../store/history";

export default function Main() {
  return (
    <Router history={history}>
          <Provider store={store}>
      <div>
        <Route exact path="/dashboard" render={() => (<ConnectedDashboard />)} />
      </div>
    </Provider>
    </Router>
  );
}
