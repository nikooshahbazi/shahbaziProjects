import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar() {

    useEffect(() => {
        if (!lat || !lng) return;
    
        async function fetchLocationData() {
          setIsLoadingGeoCoding(true);
          setGeoCodingError(null);
          try {
            const { data } = await axios.get(
              `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
            );
    
            if (!data.countryCode)
              throw new Error(
                "this location is not a city! please click somewhere else."
              );
    
            setCityName(data.city || data.locality || "");
            setCountry(data.countryName);
            setCountryCode(data.countryCode); // FR, IR ,...
          } catch (error) {
            setGeoCodingError(error.message);
          } finally {
            setIsLoadingGeoCoding(false);
          }
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo 😍</div>
      <input
        className="text-field"
        type="text"
        placeholder=" search..."
      ></input>
      <div className="navbar__result">Found X characters</div>
      <button className="heart">
        <HeartIcon className="icon"/>
        <span className="badge">4</span>
      </button>
    </nav>
  );
}
export default Navbar;
