import React from "react";

function AppNav() {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
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
