import React from "react";
import ReactDOM from "react-dom";
import { User } from "../User";

describe("User component ", () => {
  it("renders without crashing", () => {
    ReactDOM.render(<User />, document.createElement("div"));
  });
});
