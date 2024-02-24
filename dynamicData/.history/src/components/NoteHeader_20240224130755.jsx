const NoteHeader = ({ notes }) => {
  return (
    <div className="note-header">
      MyNotes({notes.length})
    </div>
     <select></select>
  );
};

export default NoteHeader;
