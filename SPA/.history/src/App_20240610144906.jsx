import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
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
      <Routes>
        {/* اینجا میگه در مسیر اسلش کامپوننت Home  رونشون بده */}
        <Route path="/" element={<Home />} />
        <Route path/>
      </Routes>
    </div>
  );
}

export default App;
