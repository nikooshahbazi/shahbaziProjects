import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children , numOfFavorites }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
     <
    </nav>
  );
}
export default Navbar;

function Logo() {
  return <div className="navbar__logo">Logo 😍</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      className="text-field"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder=" search..."
    ></input>
  );
}

export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} characters</div>;
}

export function Favorite({numOfFavorites}) {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">{numOfFavorites}</span>
    </button>
  );
}
