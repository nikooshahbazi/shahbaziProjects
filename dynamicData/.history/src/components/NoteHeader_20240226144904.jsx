import { useState } from "react";

function NoteHeader({ notes }) {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy}>
        <option value={latest}>Sort base on latest Notes</option>
        <option value={latest}>Sort base on earliest Notes</option>
        <option value={import React from 'react'
        
        export const Component = (props) => {
          return(
            <div>
              {props.children}
            </div>
          )
        }
        
        export default Component}>Sort base on completed Notes</option>
        
      </select>
    </div>
  );
}

export default NoteHeader;
