import { useEffect } from "react";

function useCharaters() {
  const [characters, setCharacters] = useState(allCharacters);

  //loading before fetch data:
  const [isLoading, setIsLoading] = useState(false);
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
  return <div>UseCharaters</div>;
}

export default useCharaters;
