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
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender ==="Male"}</span>
            <span>{character.name}</span>
          </h3>
        </div>
      </div>
      <div className="character-episode"></div>
    </div>
  );
}

export default CharacterDetail;
