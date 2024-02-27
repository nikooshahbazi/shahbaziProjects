import { useState } from "react";

function NoteHeader({ notes }) {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select>
        <option>
        </option>
      </select>
    </div>
  );
}

export default NoteHeader;
