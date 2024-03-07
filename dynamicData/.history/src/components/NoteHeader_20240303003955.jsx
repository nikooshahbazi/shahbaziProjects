function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy}>
        <op
      </select>
    </div>
  );
}

export default NoteHeader;
