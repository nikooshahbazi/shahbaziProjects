function NoteList({ notes }) {
  //console.log(notes + "nikoo");
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem(note) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //   console.log("nikoo")
  console.log(note.title + "title");
  console.log(typeof note.description + "desc");
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note?.title}</p>
          <p className="description">{note?.description}</p>
        </div>
        <div className="actions">
          <button>❌</button>
          <input type="checkbox" name="" id=""></input>
        </div>
      </div>
      <div className="note item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
