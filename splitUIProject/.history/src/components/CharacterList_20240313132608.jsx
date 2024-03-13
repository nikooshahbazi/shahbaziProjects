function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character key={item.id}/>
      )
      )}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return <div className="list-item">{item.title}</div>;
}
