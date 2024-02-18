function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => {
        <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
}

export default NoteList;

function NoteItem(note) {
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
            <p className="title"></p>
            <p className="description"></p>
        </div>
      </div>
      <div className="note item__footer"></div>
    </div>
  );
}
