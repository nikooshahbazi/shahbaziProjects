import {  , useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function notesReducer(state, action) {
  switch (action.type) {
    case "AddNewNote": {
      return [...state, action.payload];
    }
    case "DeleteNote": {
      return state.filter((s) => s.id !== action.payload);
    }
    case "CompletedNote": {
      return state.map((note) =>
        note.id === action.payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("unknown Error" + action.type);
  }
}
function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
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
