import React, { useCallback, useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Headers() {
    const [destination, setDestination] = useState("");
    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState("");
    return (
        <div className="header">
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <MdLocationOn className="headerIcon locationIcon" />
                    <input
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Where to go?"
                        className="headerSearchInput"
                        name="destination"
                        id="destination"
                    />
                    <span className="seperator"></span>
                </div>
                <div className="headerSearchItem">
                    <HiCalendar className="headerIcon dateIcon" />
                    <div className="dateDropDown">2024/05/05</div>
                    <span className="seperator"></span>
                </div>
                <div className="headerSearchItem">
                    <div
                        id="optionDropDown"
                        onClick={() => setOpenOption(!openOption)}
                    >
                        1 adult &bull; 0 children &bull; 3 room
                    </div>
                    {openOption && (
                        <GuestOptionList
                            className="guestOptions"
                            options={options}
                        ></GuestOptionList>
                    )}
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

export default Headers;

function GuestOptionList({ options }) {
    return (
        <div className="guestOptions">
            <OptionItem type="adult" options={options} minlimit={1} />
            <OptionItem type="children" options={options} minlimit={1} />
            <OptionItem type="room" options={options} minlimit={1} />
        </div>
    );
}

function OptionItem({ options, minlimit, type }) {
    return (
        <div className="guestOptionItem">
            <span className="optionText">{type}</span>
            <div className="optionCounter">
                <button className="optionCounterBtn">
                    <HiMinus />
                </button>
                <span className="optionCounterNumber">{options[type]}</span>
                <button className="optionCounterBtn">
                    <HiPlus />
                </button>
            </div>
        </div>
    );
}
