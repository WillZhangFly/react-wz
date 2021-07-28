import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function TaskDetail({ groups, task }) {
  return (
    <div>
      <div>
        <input value={task.name}/>
      </div>
      <div>
        <button>Complete / Reopen Task</button>
      </div>
      <div>
        <select className="form-control">
          >
          {groups.map((group) => {
            <option key={group.id} value={group.id}>
              {group.name}
            </option>;
          })}
        </select>
      </div>
      <div>
        <Link to="/dashboard">
          <button className="btn btn-primary mt-2">Done</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { groups, tasks } = state;
  const task = tasks.find((task) => task.id === id);

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

export const ConnectTaskDetail = connect(mapStateToProps)(TaskDetail);
