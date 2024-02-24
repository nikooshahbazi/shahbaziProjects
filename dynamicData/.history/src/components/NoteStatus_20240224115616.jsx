const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;

  return (
    <ul className="note-status">
      <li>
        AllNo <span>{allNotes}</span>
      </li>
      <li>
       <span>{completedNotes}</span>
      </li>
      <li>
        Open <span></span>
      </li>
    </ul>
  );
};

export default NoteStatus;
