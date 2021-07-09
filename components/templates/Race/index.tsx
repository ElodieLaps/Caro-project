import Race, { getRaces } from "../../../lib/models/Race";

export type RacesProps = {
   title: string;
   races: Array<Race>;
}

const RacesContent = ({ title, races }: RacesProps) => {
   const racesList = getRaces(races);

   return (
      <div className="race">
         <h1>{title}</h1>
         {racesList.map((race: Race) => {
            return (
               <div key={race.name}>
                  <h1>{race.name}</h1>
                  {console.log(race)}
                  {race.getName()}
               </div>
            )
         })}
      </div>
   )

}

export default RacesContent;