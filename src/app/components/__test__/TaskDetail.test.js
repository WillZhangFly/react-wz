import { TaskDetail } from "../TaskDetail";
import React from "react";
import { shallow } from "enzyme";

describe("Task Detail component ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <TaskDetail
        groups={[]}
        task=""
        isComplete
        setTaskCompletion
        id="test"
        setTaskName="test"
        setTaskGroup
      />
    );
    expect(wrapper.find("select").length).toEqual(1);
  });
});
