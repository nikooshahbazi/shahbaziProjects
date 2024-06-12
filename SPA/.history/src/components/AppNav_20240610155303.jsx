import React from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Posts</NavLink>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppNav;
