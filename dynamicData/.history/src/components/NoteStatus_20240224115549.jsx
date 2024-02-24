const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;

  return (
    <ul className="note-status">
      <li>
        {allNotes} <span>3</span>
      </li>
      <li>
       {completedNotes}<span></span>
      </li>
      <li>
        Open <span></span>
      </li>
    </ul>
  );
};

export default NoteStatus;
