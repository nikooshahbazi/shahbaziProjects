function CharacterList({ characters }) {
  
  return (
    <div className="characters-list">
      {characters.map((item) => {
        return <Character key={item.id} item={item} />;
      })}
    </div>
  );
  console.log(characters + "");
}

export default CharacterList;

function Character({ item }) {
  return <div className="list-item">{item.title}</div>;
}
