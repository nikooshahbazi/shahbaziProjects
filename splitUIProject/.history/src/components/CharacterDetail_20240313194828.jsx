import { character } from "../data/data"

function CharacterDetail() {
  return (
    <div style={{flex:1}}>
      <div className="character-detail">
        <img src={character} alt=""/>
      </div>
      <div className="character-episode"></div>
    </div>
  )
}

export default CharacterDetail
