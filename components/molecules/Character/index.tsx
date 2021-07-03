import Character from "../../../lib/models/Character";

type CharacterCardType = {
   character: Character;
}

const CharacterCard = ({ character }: CharacterCardType) => {
   return (
      <div className="character">
         <p className="character__name">
            {character.name}
            <span className="character__gender">{character.getGender()}</span>
         </p>
         <p className="character__item">
            <span>niveau: </span>
            {character.level}
         </p>
         <p className="character__item">
            <span>race: </span>
            {character.getRace()}
         </p>
         <p className="character__item" >
            <span>classe: </span>
            {character.getRole()}
         </p>
      </div >
   )
}

export default CharacterCard;