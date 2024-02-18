import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) =>{
    setNotes((prevNotes) => [...prevNotes , newNote])
  }
  return (
    <div className="contianer">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNotes{}/>
        <NoteList />
      </div>
    </div>
  );
}

export default App;
