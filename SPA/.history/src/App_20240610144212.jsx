import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

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
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    
  );
}

export default App;
