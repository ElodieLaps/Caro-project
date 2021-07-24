import Race from "../../../lib/models/Race";
import RaceCard from "../../molecules/RaceCard";


type RacesListType = {
   racesList: Array<Race>;
};

const RacesList = ({ racesList }: RacesListType) => {
   return (
      <div className="races-list">
         {racesList.map((race: Race) => {
            return (
               <RaceCard key={race.name} race={race} />
            )
         })}
      </div>
   )
}

export default RacesList;