import {} from '@heroicons/react/24/outline'

function Navbar() {
  return <nav className="navbar">
    <div className="navbar__logo">Logo 😍</div>
    <input className="text-field" type="text">search...</input>
    <div className="navbar__result">Found X characters</div>
    <button className="heart">
        {}
    </button>
  </nav>;
}
export default Navbar;
