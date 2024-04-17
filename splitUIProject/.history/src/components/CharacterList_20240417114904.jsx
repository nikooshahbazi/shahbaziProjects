import { EyeIcon , EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
function CharacterList({ characters, isLoading , onSelectCharacter  , selectedID}) {
  return (
    <div className="characters-list">
      {isLoading ? (
        <Loader />
      ) : ( 
        characters.map((item) => <Character selectedID={selectedID} key={item.id} item={item} onSelectCharacter={onSelectCharacter}/>)
      )}
    </div>
  );
}

export default CharacterList;

export function Character({ item ,children onSelectCharacter , selectedID}) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.image} />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
    {children}
    </div>
  );
}

function CharacterName({ item }) {
  return (
    <h3 className="name">
      <span>{item.gender === "Male" ? "👨🏻" : "👩🏻"}</span>
      <span>{item.name}</span>
    </h3>
  );
}

function CharacterInfo({ item }) {
  return (
    <div className="list-item__info info">
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span> {item.status} </span>
      <span> - {item.species} </span>
    </div>
  );
}
