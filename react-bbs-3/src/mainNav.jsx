import React from "react";
import { Link, NavLink } from "react-router-dom";

const mainNav = () => {
  const nav_style = {
    backgroundColor: "#77AF9C",
  };
  return (
    <nav className="navbar navbar-expand " style={nav_style}>
      <ul className="navbar-nav text-white">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bbsWrite">
            BBs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default mainNav;
