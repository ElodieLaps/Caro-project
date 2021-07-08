import Character from "../../../lib/models/Character";
import Statbar from "../../atoms/Statbar";
import StatItem from "../../atoms/StatItem";

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
         <Statbar statistic={character.statistics.health} />
         <Statbar statistic={character.statistics.mana} />
         <Statbar statistic={character.experience} />
         <div>
            <StatItem statistic={character.statistics.health_regen} />
            <StatItem statistic={character.statistics.mana_regen} />
            <StatItem statistic={character.statistics.attack_damages} />
            <StatItem statistic={character.statistics.dark_power} />
            <StatItem statistic={character.statistics.light_power} />
            <StatItem statistic={character.statistics.armor} />
            <StatItem statistic={character.statistics.protection} />
            <StatItem statistic={character.statistics.blessing} />
            <StatItem statistic={character.statistics.swiftness} />
            <StatItem statistic={character.statistics.dodge} />
         </div>

      </div >
   )
}

export default CharacterCard;