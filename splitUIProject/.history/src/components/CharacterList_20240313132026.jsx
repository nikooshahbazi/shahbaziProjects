function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((item) => {
        return(
          <Character key/>
        )
      })}
    </div>
   
  );
}

export default CharacterList;

