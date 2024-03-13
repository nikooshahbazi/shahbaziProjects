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
     
      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span> {item.status} </span>
        <span> - {item.species} </span>
      </div>
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
  );
}

function 

