function CharacterList({ characters }) {
  return <div className="characters-list">
    {characters.map((cha))}
  </div>;
}

export default CharacterList;
