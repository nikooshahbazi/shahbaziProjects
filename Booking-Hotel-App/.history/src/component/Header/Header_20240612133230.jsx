import React from 'react'
import {MdLocationOn} from "react-icons/md"

function Header() {
  return (
    <div className='header'>
        <div className="headerSEarch">
            <div className="headerSearchItem">
                <MdLocationOn className='header-icon'/>
            </div>
            <div className="headerSearchItem"></div>
            <div className="headerSearchItem"></div>
            <div className="headerSearchItem"></div>
        </div>
    </div>
  )
}

export default Header