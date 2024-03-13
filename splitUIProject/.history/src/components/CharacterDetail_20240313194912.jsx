import { character } from "../data/data";

function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character}
          alt={character.name}
          className="character-detail__img"
        />
        <div className=""></div>
      </div>
      <div className="character-episode"></div>
    </div>
  );
}

export default CharacterDetail;
