function NoteList({ notes }) {
  return (
    <div className="note-list">
      notes.map((note) <NoteItem key={note.id} note={note}/>)
    </div>
  );
}

export default NoteList;

function NoteItem() {
  return <div className="note-item"></div>;
}
