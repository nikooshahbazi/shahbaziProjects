import { useEffect, useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar, { Favorite, Search, SearchResult } from "./components/Navbar";
import Modal from "./components/Modal";
import useCharaters from "./Hooks/useCharaters";
import { Toaster } from "react-hot-toast";
function App() {
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharaters(query);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );


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
  //[1,2,3]f

  const handleDeleteFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id)); 
  };
  //console.log(selectedID);
  return (
    <div className="app">
      <div style={{ color: "#fff" }}>{count}</div>
      <Toaster />
      <Modal title="this  title" open={false}>
        this is modal
      </Modal>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favorite favorites={favorites} deleteFavorite={handleDeleteFavorite} />
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
