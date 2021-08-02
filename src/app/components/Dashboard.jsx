import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";
import { ConnectedUser } from "./User";

export const Dashboard = ({ groups, selectedUserId }) => {
  return (
    <div>
      <div className="row">
        <ConnectedUser id={selectedUserId} />
      </div>
      <div className="row">
        {groups.map((group) => (
          <ConnectedTaskList
            id={group.id}
            name={group.name}
            key={group.id}
            className="col"
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    selectedUserId: state.session.id,
  };
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
