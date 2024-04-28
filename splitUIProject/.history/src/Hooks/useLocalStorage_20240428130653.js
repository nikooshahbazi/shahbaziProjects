import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );  
  useEffect(() => {} , [favo])
}
