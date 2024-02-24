import { useState } from "react";

function NoteHeader ({ notes }) {
    const[sortBy , setSortBy] = useState("");

const hanleChangeSortBy =(e)=>{


}
  return (
    <div className="note-header">
      <h2>MyNotes({notes.length})</h2>
      <select value={sortBy} onChange ={hanleChangeSortBy}></select>

    </div>
  );
};

export default NoteHeader;
