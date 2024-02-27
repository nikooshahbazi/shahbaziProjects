import { useState } from "react";

function NoteHeader({ notes }) {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div className="note-header">
      <h1></h1>
    </div>
  );
}

export default NoteHeader;
