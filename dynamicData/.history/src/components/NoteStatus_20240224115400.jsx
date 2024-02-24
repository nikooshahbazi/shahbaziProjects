const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = 



  return (
    <ul className="note-status">
      <li>
        {allNotes} <span>3</span>
      </li>
      <li>
        Completed<span></span>
      </li>
      <li>
        Open <span></span>
      </li>
    </ul>
  );
};

export default NoteStatus;
