import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(value));
  }, [value]);
   return [value , setValue]
}
