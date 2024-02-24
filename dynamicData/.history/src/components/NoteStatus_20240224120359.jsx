const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completed
  const unCompletedNotes = allNotes - unCompletedNotes;

  return (
    <ul className="note-status">
      <li>
        allNotes <span>{allNotes}</span>
      </li>
      <li>
       <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
