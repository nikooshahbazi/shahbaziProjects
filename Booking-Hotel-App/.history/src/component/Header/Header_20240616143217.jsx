import { useState } from "react";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2022/04/06</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={() => setOpenOptions(!openOptions)}>
            1 adult &bull; 2 children &bull; 1 room
          </div>
          {openOptions ? <GuestOptionList handleOptions={handleOptions} options={options} /> : ""}
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptionList({ options ,handleOptions }) {
  return (
    <div className="guestOptions">
      <OptionItem handleOptions={handleOptions} options={options} minLimited={1} />
      <OptionItem handleOptions={handleOptions} options={options} minLimited={1} />
      <OptionItem handleOptions={handleOptions} options={options} minLimited={1} />
    </div>
  );
}
function OptionItem({ options, minLimited, type , handleOptions }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="guestOptionItem">
      <span className="guestOptionText">{type}</span>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          onClick={handleOptions(type ,  )}
        >
          <HiPlus className="icon">{counter}</HiPlus>
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          disabled={options[type] <= minLimited}
          onClick={() => setCounter(counter - 1)}
        >
          <HiMinus className="icon"></HiMinus>
        </button>
      </div>
    </div>
  );
}
