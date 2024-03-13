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
  return (
    <div className="list__item">
      <img src={item.image} alt={item.image} />
      <h2</h>
    </div>
  );
}
