import { useEffect, useState } from "react";

export default function useLocalStorage(  ) {
  const [count, setCount] = useState();
  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  }, [favorites]);
  return <div>useLocalStorage</div>;
}
