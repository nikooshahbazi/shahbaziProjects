const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  //   console.log("nikooooo")
  const unCompletedNotes = allNotes - completedNotes;


  //یعنی هر زمانی که مقدارش فالس باشه،یعنی اگه مقدارش صفر باشه و هیچ مقدار دیگه ای نداشته باشه یعنی فالس، //ول اگه مقدارش بیشتر از صغ
  if(!allNotes) 

  return (
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
  );
};

export default NoteStatus;
