const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  //   console.log("nikooooo")
  const unCompletedNotes = allNotes - completedNotes;

  return (
    <div className="note-container">
      <ul className="note-status">
        <li>
          allNotes <span>{allNotes}</span>
        </li>
        <li>
          completed <span>{completedNotes}</span>
        </li>
        <li>
          Open <span>{unCompletedNotes}</span>
        </li>
      </ul>
    </div>
  );
};

export default NoteStatus;
