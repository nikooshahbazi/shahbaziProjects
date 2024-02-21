function NoteList({ notes }) {
  return (
    <div className="note-container">
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote}/>;
      })}
    </div>
  );
}

export default NoteList;

function NoteItem({ note  , onDeleteNote}) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    
  };

  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note?.title}</p>
          <p className="desc">{note?.description}</p>
        </div>
        <div className="actions">
          <button onClick={onDeleteNote}>❌</button>
          <input type="checkbox" name="" id=""></input>
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
