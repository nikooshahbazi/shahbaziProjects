import React from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <nav href="/">Home</nav>
          </li>
          <li>
            <a href="/posts">Posts</a>
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
