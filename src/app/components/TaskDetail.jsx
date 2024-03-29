import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
} from "../store/mutations";

export function TaskDetail({
  groups,
  task,
  isComplete,
  setTaskCompletion,
  id,
  setTaskName,
  setTaskGroup,
}) {
  return (
    <div className="card p-3 col-6">
      <div>
        <input
          onChange={setTaskName}
          value={task.name}
          className="form-control form-control-lg"
        />
      </div>
      <div>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setTaskCompletion(id, !isComplete)}
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div className="mt-3">
        <select
          className="form-control"
          onChange={setTaskGroup}
          value={task.group}
        >
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(setTaskName(id, e.target.value));
    },
  };
};

export const ConnectTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
