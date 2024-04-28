import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useCharaters(query) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${}=${query}`
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
  return { isLoading, characters };
}

export default useCharaters;
