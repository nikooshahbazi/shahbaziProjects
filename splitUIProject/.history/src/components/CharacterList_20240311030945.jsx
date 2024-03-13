function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((item) => {
        <Character key={item.id} item={item} />;
      })}
    </div>
  );
}

export default CharacterList;


function Character (){
    return(
        <div className="list__item">
            {item.title}
        </div>
    )
}
