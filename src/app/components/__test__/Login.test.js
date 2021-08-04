import { Login } from "../Login";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Login component ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Login authenticateUser={() => {}} authenticated={true} />
    );
    expect(wrapper.find("input").length).toEqual(2);
  });
});
