function CharacterList({ characters }) {
  return <div className="characters-list">
    {characters.map((item) => {
        <Character />
    })}
  </div>;
}

export default CharacterList;
