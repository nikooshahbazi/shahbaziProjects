import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route />
        </Routes>
      </div>
    
  );
}

export default App;
