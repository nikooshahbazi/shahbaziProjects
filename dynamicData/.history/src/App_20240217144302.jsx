import "./App.css";
import AddNewNote from "./components/AddNewNote";

function App() {
  return (
    <div className="contianer">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote />
       <NoteList>
      </div>
    </div>
  );
}

export default App;
