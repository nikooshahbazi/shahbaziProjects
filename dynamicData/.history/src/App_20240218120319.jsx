import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  // میگن هرقسمتی که استیت بود سعی کنید همونجا استیت 

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote setNotes={setNotes}/>
        <NoteList notes={notes}/>
      </div>
    </div>
  );
}

export default App;
