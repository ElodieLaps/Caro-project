import Race from "../../../lib/models/Race";

type RaceCardType = {
   race: Race;
}

const RaceCard = ({ race }: RaceCardType) => {
   return (
      <div className="race">
         <h1>{race.getName()}</h1>


      </div>
   )
}

export default RaceCard;