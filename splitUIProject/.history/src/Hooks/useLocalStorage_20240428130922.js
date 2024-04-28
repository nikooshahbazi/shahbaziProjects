import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [value, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  }, [favorites]);
   return [value , setValue]
}
