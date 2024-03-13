import { useState } from "react";
import { allCharacters } from "../data/data";
import { EyeIcon } from "@heroicons/react/24/outline";
function CharacterList() {
  const [characters, setCharacters] = useState(allCharacters);
  return (
    <div className="characters-list">
      {allCharacters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.image} />
      <CharacterName item={item}/>
     
      <button className="icon red">
        <EyeIcon />
      </button>
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

function CharacterInfo({})
