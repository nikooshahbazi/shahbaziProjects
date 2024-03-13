import { FolderMinusIcon, HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ chi }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      
      <Favorite />
    </nav>
  );
}
export default Navbar;

function Logo() {
  return <div className="navbar__logo">Logo 😍</div>;
}

function Search() {
  return (
    <input className="text-field" type="text" placeholder=" search..."></input>
  );
}

function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} characters</div>;
}

function Favorite() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">4</span>
    </button>
  );
}
