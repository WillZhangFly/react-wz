import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <div className="header">
    <Link to="/dashboard">
      <h1>Developer Task Book</h1>
    </Link>
  </div>
);

export const ConnectedNavigation = connect((state) => state)(Navigation);
