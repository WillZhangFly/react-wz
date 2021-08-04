import React from "react";
import ReactDOM from "react-dom";
import { SignUp } from "../SignUp";

describe("SignUp component ", () => {
  it("renders without crashing", () => {
    ReactDOM.render(
      <SignUp signUpUser={() => {}} authenticated={true} />,
      document.createElement("div")
    );
  });
});
