import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterDetail />
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
