import { useNotes } from "../context/NoteContext";

const NoteStatus = () => {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  //   console.log("nikooooo")
  const unCompletedNotes = allNotes - completedNotes;

  //یعنی هر زمانی که مقدارش فالس باشه،یعنی اگه مقدارش صفر باشه و هیچ مقدار دیگه ای نداشته باشه یعنی فالس،
  //ول اگه مقدارش بیشتر از صفر بود یعنی ترو هست

  if (!allNotes) return <h2>No Notes has already been added.</h2>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
