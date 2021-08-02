import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const SignUp = ({ signUpUser, authenticated }) => {
  return (
    <div className="card p-3 col-6">
      <h2>Please sign up:</h2>
      <form onSubmit={signUpUser}>
        <label htmlFor="signUpUserName">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="signUpUserName"
          className="form-control is-valid"
          required
        />
        <label className="mt-3" htmlFor="signUpPassword">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="signUpPassword"
          defaultValue=""
          className="form-control"
          required
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>User already existed, try another user name!</p>
        ) : null}
        <button type="submit" className="form-control mt-2 btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { authenticated: state.session.authenticated };
};

const mapDispatchToProps = (dispatch) => ({
  signUpUser(e) {
    e.preventDefault();
    let username = e.target["username"].value;
    let password = e.target["password"].value;
    dispatch(mutations.requestSignUpUser(username, password));
  },
});

export const ConnectedSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
