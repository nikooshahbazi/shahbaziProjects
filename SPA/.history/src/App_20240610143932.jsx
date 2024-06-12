import { BrowserRouter } from "react-router-dom";
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
      </div>
    
  );
}

export default App;
