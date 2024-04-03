import { useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar, { SearchResult } from "./components/Navbar";
import { allCharacters } from "./data/data";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  fetch("https://rickandmortyapi.com/api/character").then
  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResult={characters.length}/>
      </Navbar>
      <Main>
        <CharacterList characters={characters} />
        <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
