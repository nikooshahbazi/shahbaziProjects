export default function useLocalStorage() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  const isAddedToFavorite = favorites.map((fav) => fav.id).includes(selectedID);
}
