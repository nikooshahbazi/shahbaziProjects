import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  //میگن هر قسمتی که استیت بود سعی کنید همونجا استیت رو اپدیت کنید
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filterDeleteItem = notes.filter((n) => n.id !== id);
    // setNotes(filterDeleteItem);
    //روش بهتر گزینه زیر میباشد
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompletedNote = (e) => {
    const numberNoteID = Number(e.target.value);
    const newNotes = notes.map((note)=> {
      note.id === numberNoteID ? {...note , completed: }
    })
    // const numberNoteID = Number(e.target.value);
    // // const newNotes = notes.map((note) =>
    // //   note.id == numberNoteID ? { ...note, completed: !note.completed } : note
    // // );
    // // setNotes(newNotes);
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id == numberNoteID ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };

  return (
    <div className="container">
      <NoteHeader notes={notes} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            onDeleteNote={handleDeleteNote}
            onCompletedNote={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
