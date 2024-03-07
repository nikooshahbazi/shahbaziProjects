function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={so}></select>
    </div>
  );
}

export default NoteHeader;
