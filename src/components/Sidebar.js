import { Link } from "react-router-dom";
import React from "react";

export default function Sidebar() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Dreamers</Link>
        </li>
        <li>
          <Link to="/signin">User Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
