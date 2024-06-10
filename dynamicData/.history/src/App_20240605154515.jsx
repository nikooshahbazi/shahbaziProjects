import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";


function App() {
  // const [notes, setNotes] = useState([]);

  const [sortBy, setSortBy] = useState("latest");
  //میگن هر قسمتی که استیت بود سعی کنید همونجا استیت رو اپدیت کنید
  const handleAddNotes = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "AddNewNote", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "DeleteNote", payload: id });
  };

  const handleCompletedNote = (e) => {
    const numberNoteID = Number(e.target.value);
    dispatch({ type: "CompletedNote", payload: numberNoteID });
    // const newNotes = notes.map((note) =>
    //   note.id === numberNoteID ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDeleteNote}
            onCompletedNote={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
