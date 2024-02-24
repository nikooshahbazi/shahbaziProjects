import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  //میگن هر قسمتی که استیت بود 
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDelteNote = (id) => {
    // const filterDeleteItem = notes.filter((n) => n.id !== id);
    // setNotes(filterDeleteItem);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCompletedNote = (e) => {
    const numberNoteId = Number(e.target.value);
    const checked = notes.map((note) =>
      note.id == numberNoteId ? { ...note, completed: !note.completed } : note
    );
    setNotes(checked);
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList
          notes={notes}
          onDeleteNote={handleDelteNote}
          onCompletedNote={handleCompletedNote}
        />
      </div>
    </div>
  );
}

export default App;
