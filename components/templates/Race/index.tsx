import { createAllRaces } from "../../../lib/factories/race";
import Race from "../../../lib/models/Race";
import Title from "../../atoms/Title";
import RacesList from "../../organisms/RacesList";

export type RacesProps = {
   title: string;
   races: Array<Race>;
}

const RacesContent = ({ title, races }: RacesProps) => {
   const racesList = createAllRaces(races);

   return (
      <div className="race">
         <Title classname="race__title" text={title} />
         <RacesList racesList={racesList} />
      </div>
   )

}

export default RacesContent;