function CharacterList({ characters }) {
  // console.log(Object.keys(characters));
  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return <div className="list-item">{item.title}</div>
  <img className="character-detail__img">{item}</img>;
}
