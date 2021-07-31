import Character from "../../../lib/models/Character";
import Statistic from "../../../lib/models/Statistic";
import Equipment from "../../../lib/models/Equipment";
import * as statConst from "../../../lib/constants/STATISTICS";
import Statbar from "../../atoms/Statbar";
import StatItem from "../../atoms/StatItem";
import { findAvatar } from "../../../lib/constants/AVATAR";
import Image from 'next/image'


type CharacterCardType = {
   character: Character;
}

const CharacterCard = ({ character }: CharacterCardType) => {
   const picture = findAvatar(character.race.name, character.gender);
   return (
      <div className="character">
         <Image src={picture} alt={character.name} />
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

         {character.statistics.map((stat: Statistic) => {
            if (stat.type === statConst.HEALTH ||
               stat.type === statConst.MANA ||
               stat.type === statConst.EXPERIENCE) {
               return <Statbar key={stat.type} statistic={stat} />
            } return <StatItem key={stat.type} statistic={stat} />
         })}

         {character.equipments.map((equipment: Equipment) => {
            return <p key={equipment.name}>{equipment.label}</p>
         })}
      </div >
   )
}

export default CharacterCard;