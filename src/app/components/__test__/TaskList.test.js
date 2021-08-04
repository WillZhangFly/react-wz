import { TaskList } from "../TaskList";
import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

describe("Task List component ", () => {
  let taskListWrapper;
  beforeEach(() => {
    taskListWrapper = shallow(
      <TaskList tasks={[]} name="" id="" createNewTask={() => {}} />
    );
  });
  it("has only one Link", () => {
    expect(taskListWrapper.find(Link).length).toEqual(0);
  });

  it("has only one button", () => {
    expect(taskListWrapper.find("button").length).toEqual(1);
  });
});
