import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTaskCompletion } from "../store/mutations";

function TaskDetail({ groups, task, isComplete, setTaskCompletion, id }) {
  return (
    <div>
      <div>
        <input value={task.name} />
      </div>
      <div>
        <button onClick={() => setTaskCompletion(id, !isComplete)}>
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div>
        <select className="form-control">
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(setTaskCompletion(id, isComplete));
    },
  };
};

export const ConnectTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
