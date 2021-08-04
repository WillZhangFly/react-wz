import { Login } from "../Login";
import React from "react";
import { shallow } from "enzyme";

describe("Login component ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Login authenticateUser={() => {}} authenticated={true} />
    );
    expect(wrapper.find("input").length).toEqual(2);
  });
});
