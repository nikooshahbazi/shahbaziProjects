import { useCallback, useState } from "react";

function NoteHeader ({ notes }) {
    const[sortBy , setSortBy] = useState


  return (
    <div className="note-header">
      <h2>MyNotes({notes.length})</h2>
      <select value={}></select>

    </div>
  );
};

export default NoteHeader;
