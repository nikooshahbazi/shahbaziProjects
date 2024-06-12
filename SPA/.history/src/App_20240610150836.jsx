import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        {/* اینجا میگه در مسیر اسلش کامپوننت Home  رونشون بده */}
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  );
}

export default App;
