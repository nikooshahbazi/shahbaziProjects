import { useEffect, useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar, { Favorite, Search, SearchResult } from "./components/Navbar";
import { allCharacters } from "./data/data";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState(allCharacters);

  //loading before fetch data:
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );
        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        setCharacters([]);
        // console.log(err.response.data.error);
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setCharacters([]);
      return;
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://rickandmortyapi.com/api/characters")
  //     .then(({data}) => {
  //       setCharacters(data.results.slice(0, 5));
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);
  const [selectedID, setSelectedID] = useState(null);
  const handleSelectCharacter = (id) => {
    setSelectedID((prevId) => (prevId === id ? null : id));
  };
  const handleAddFavorites = (char) => {
    setFavorites((prevFav) => [...prevFav, char]);
  };
  const isAddedToFavorite = favorites.map((fav) => fav.id).includes(selectedID);
  //[1,2,3]

  //console.log(selectedID);
  return (
    <div className="app">
      <div style={{ color: "#fff" }}>{count}</div>
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favorite numOfFavorites={favorites.length} />
      </Navbar>
      <Main>
        <CharacterList
          selectedID={selectedID}
          onSelectCharacter={handleSelectCharacter}
          characters={characters}
          isLoading={isLoading}
        />
        <CharacterDetail
          selectedID={selectedID}
          onAddFavorite={handleAddFavorites}
          isAddedToFavorite={isAddedToFavorite}
        />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
