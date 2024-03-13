function CharacterList({ characters }) {
  return (
    <div className="characters-list">
       {characters.map((note) => {
        return (
          <cha
            key={note.id}
            note={note}
            onDeleteNote={onDeleteNote}
            onCompletedNote={onCompletedNote}
          />
        );
      })}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return <div className="list-item">{item.title}</div>;
}
