import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <Link to="./posts">See Post Page</Link>
    </div>
  );
}

export default Home;
