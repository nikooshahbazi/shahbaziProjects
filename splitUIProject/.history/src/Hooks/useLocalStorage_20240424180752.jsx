export default function useLocalStorage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  }, [favorites]);
  return <div>useLocalStorage</div>;
}
