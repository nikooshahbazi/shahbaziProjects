function CharacterList({ characters }) {
  return (
    <div className="characters-list">
      {characters.map((i))}
    </div>
   
  );
}

export default CharacterList;

