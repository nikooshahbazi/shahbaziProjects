const NoteHeader = ({ notes }) => {
  return (
    <div className="note-header">
      <h2>MyNotes({notes.length})</h2>
      <select></select>

    </div>
  );
};

export default NoteHeader;
