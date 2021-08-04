import React from "react";
import Main from "../Main";
import { ConnectedNavigation } from "../Navigation";
import { shallow } from "enzyme";

describe("Main component ", () => {
  it("includes ConnectedNavigation", () => {
    const mainWrapper = shallow(<Main />);
    const connectedNavigationComponent = mainWrapper.find(ConnectedNavigation);
    expect(connectedNavigationComponent.length).toEqual(1);
  });
});
