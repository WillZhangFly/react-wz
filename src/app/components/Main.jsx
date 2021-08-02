import React from "react";
import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedLogin } from "./Login";
import { store } from "../store";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";
import { ConnectedSignUp } from "./SignUp";
import { Redirect } from "react-router";

const RouteGuard =
  (Component) =>
  ({ match }) => {
    if (!store.getState().session.authenticated) {
      return <Redirect to="/" />;
    } else {
      return <Component match={match} />;
    }
  };

export default function Main() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="container mt-3">
          <ConnectedNavigation />
          <Route exact path="/" component={ConnectedLogin} />
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={RouteGuard(ConnectedDashboard)}
            />
            <Route exact path="/new" render={() => <ConnectedSignUp />} />
            <Route
              exact
              path="/task/:id"
              render={RouteGuard(ConnectTaskDetail)}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
