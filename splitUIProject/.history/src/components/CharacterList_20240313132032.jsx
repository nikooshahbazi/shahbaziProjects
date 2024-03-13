function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((item) => {
        return(
          <Character key={item.id}/>
        )
      })}
    </div>
   
  );
}

export default CharacterList;

