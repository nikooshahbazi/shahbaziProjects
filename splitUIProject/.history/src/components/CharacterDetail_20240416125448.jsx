import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";
axios;

function CharacterDetail({ selectedID, onAddFavorite, isAddedToFavorite }) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setCharacter(null);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedID}`
        );

        const episodesId = data.episode.map((e) => {
          return e.split("/").at(-1);
        });
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodeData].flat().slice(0, 5));
        setCharacter(data);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedID) fetchData();
  }, [selectedID]);

  if (isLoading)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        <Loader />
      </div>
    );

  if (!character || !selectedID)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please select a character
      </div>
    );

  return (
    <div style={{ flex: 1 }}>
     
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


function CharacterSubInfo ()