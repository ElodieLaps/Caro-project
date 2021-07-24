import Race from "../../../lib/models/Race";
import StatItem from "../../atoms/StatItem";

type RaceCardType = {
   race: Race;
}

const RaceCard = ({ race }: RaceCardType) => {
   return (
      <div className="race">
         <p className="race__name">{race.getName()}</p>
         {race.statistics.map(stat =>
            <StatItem key={stat.type} statistic={stat} />
         )}
      </div>
   )
}

export default RaceCard;