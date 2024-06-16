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
          {openOptions ? <GuestOptionList options={options} /> : ""}
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

function GuestOptionList({ options }) {
  return (
    <div className="guestOptions">
      <OptionItem type="adult" options={options} minLimited={1} />
      <OptionItem type="children" options={options} minLimited={1} />
      <OptionItem type="room" options={options} minLimited={1} />
    </div>
  );
}
function OptionItem({ options, minLimited, type }) {
  const [counter, setCounter] = useState(3);
  const handlePlus = () => {
    setCounter(() => counter + 1);
  };
  const handleMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="guestOptionItem">
      <span className="guestOptionText">{type}</span>
      <div className="optionCounter">
        <button className="optionCounterBtn" onClick={handlePlus}>
          <HiPlus className="icon" />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          disabled={options[type] <= minLimited}
          onClick={handleMinus}
        >
          <HiMinus className="icon" />
        </button>
      </div>
    </div>
  );
}
