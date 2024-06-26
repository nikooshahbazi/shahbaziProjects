import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { episodes } from "../data/data";
import { useEffect, useState } from "react";

function CharacterDetail({ selectedID }) {
  const [character, setCharacter] = useState(null);

  if (!character)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please select a character
      </div>
    );

  useEffect(() => {
    async function fetchData() {
      axios.get(`"https://rickandmortyapi.com/api/character/"`)
    }
   fetchData(); 
  }, [selectedID]);

  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character.image}
          alt={character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "👨🏻" : "👩🏻"}</span>
            <span>&nbsp;{character.name}</span>
          </h3>
          <div>
            <div className="info">
              <span
                className={`status ${character.status === "Dead" ? "red" : ""}`}
              ></span>
              <span>&nbsp;{character.status}</span>
              <span> - {character.species}</span>
            </div>
            <div className="location">
              <p>Last known location</p>
              <p>{character.location.name}</p>
            </div>
            <div className="actions">
              <button className="btn btn--primary">Add to Favorite</button>
            </div>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes:</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.map((episode, index) => (
            <li key={episode.id}>
              <div>
                {String(index + 1).padStart(2, "0")} - {episode.episode} :{" "}
                <strong>{episode.name}</strong>
              </div>
              <div className="badge badge--secondary">{episode.air_date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
