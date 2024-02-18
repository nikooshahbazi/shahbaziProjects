import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useStateate([]);
  return (
    <div className="contianer">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote />
        <NoteList />
      </div>
    </div>
  );
}

export default App;