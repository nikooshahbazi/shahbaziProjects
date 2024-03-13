function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <
      )
      )}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return <div className="list-item">{item.title}</div>;
}
