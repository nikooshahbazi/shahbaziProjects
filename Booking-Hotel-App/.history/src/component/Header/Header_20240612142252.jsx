import React from "react";
import { HiCalendar } from "react-icons/hi";
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
          /><span
        </div>
        <div className="headerSearchItem">
            <HiCalendar className="headerIcon dateIcon"/>
            <div className="dateDropDown">2022/04/06</div>

        </div>
        <div className="headerSearchItem"></div>
        <div className="headerSearchItem"></div>
      </div>
    </div>
  );
}

export default Header;
