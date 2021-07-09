import Race from "../../../lib/models/Race";
import RaceCard from "../../molecules/Race";


type RacesListType = {
   racesList: Array<Race>;
};

const RacesList = ({ racesList }: RacesListType) => {
   return (
      <div className="races-list">
         {racesList.map((race: Race) => {
            return (
               <div key={race.name}>
                  <RaceCard race={race} />
               </div>
            )
         })}
      </div>
   )
}

export default RacesList;