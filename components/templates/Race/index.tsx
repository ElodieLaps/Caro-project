import Race, { getRaces } from "../../../lib/models/Race";
import RacesList from "../../organisms/RacesList";

export type RacesProps = {
   title: string;
   races: Array<Race>;
}

const RacesContent = ({ title, races }: RacesProps) => {
   const racesList = getRaces(races);

   return (
      <div className="race">
         <h1>{title}</h1>
         <RacesList racesList={racesList} />
      </div>
   )

}

export default RacesContent;