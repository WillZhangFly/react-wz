import React from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks, name }) => {
  return (
    <div className="card p-2 m-2">
      <h2>{name}</h2>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);
