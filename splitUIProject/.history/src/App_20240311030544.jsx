import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { character } from "./data/data";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterDetail />
        <CharacterList characters={character}/> 
      </div>
    </div>
  );
}

export default App;
