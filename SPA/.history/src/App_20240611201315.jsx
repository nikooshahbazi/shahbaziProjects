import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Dashboard from "./Pages/Dashboard";
import AppNav from "./components/AppNav";

function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        <Route></Route>
        {/* اینجا میگه در مسیر اسلش کامپوننت Home  رونشون بده */}
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <footer style={{ marginTop: "5rem" }}>This is footer section</footer>
    </div>
  );
}

export default App;
