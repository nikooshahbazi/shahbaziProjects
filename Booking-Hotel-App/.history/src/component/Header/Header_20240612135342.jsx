import React from "react";
import { MdLocationOn } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            type="text"
            placeholder="Where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
        </div>
        <div className="headerSearchItem">
            <HI
        </div>
        <div className="headerSearchItem"></div>
        <div className="headerSearchItem"></div>
      </div>
    </div>
  );
}

export default Header;
