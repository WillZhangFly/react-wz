import React from "react";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { store } from "../store";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";

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
            <Route
              exact
              path="/task/:id"
              render={({ match }) => <ConnectTaskDetail match={match} />}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
