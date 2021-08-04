import React from "react";
import { connect } from "react-redux";

export const User = ({ name }) => {
  return (
    <>
      {{ name } && (
        <div className="ml-2">
          Welcome <span>{name}</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const selectedUser = state.users.find((user) => user.id === ownProps.id);

  return {
    name: selectedUser ? selectedUser.name : undefined,
  };
};

export const ConnectedUser = connect(mapStateToProps)(User);
