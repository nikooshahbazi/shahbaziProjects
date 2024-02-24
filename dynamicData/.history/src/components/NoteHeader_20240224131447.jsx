import { useState } from "react";

function NoteHeader({ notes }) {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div className="note-header">
      <h2>MyNotes({notes.length})</h2>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
