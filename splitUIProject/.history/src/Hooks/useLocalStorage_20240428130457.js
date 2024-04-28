import { useState } from "react";

export default function useLocalStorage() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  const handleDeleteFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };
}
