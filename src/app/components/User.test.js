import React from "react";
import ReactDOM from "react-dom";
import { User } from "./User";

it("User component renders without crashing", () => {
  ReactDOM.render(<User name="abc" />, document.createElement("div"));
});
