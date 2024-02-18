function NoteList( {notes}) {
  //console.log(notes + "nikoo");
  return (
    <div className="note-list">
      {notes.map((note) => {
        <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
}

export default NoteList;

function NoteItem() {
  // const options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  //   console.log("nikoo")
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title"></p>
          <p className="description"></p>
        </div>
        <div className="actions">
          <button>❌</button>
          <input type="checkbox" name="" id=""></input>
        </div>
      </div>
      <div className="note item__footer">
        {/* {new Date(note.createdAt).toLocaleDateString("en-US", options)} */}
      </div>
    </div>
  );
}
