function CharacterList({ characters }) {
  return <div className="characters-list">
    {characters.map((chararcter))}
  </div>;
}

export default CharacterList;
