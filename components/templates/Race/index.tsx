import Race, { getRaces } from "../../../lib/models/Race";
import Title from "../../atoms/Title";
import RacesList from "../../organisms/RacesList";

export type RacesProps = {
   title: string;
   races: Array<Race>;
}

const RacesContent = ({ title, races }: RacesProps) => {
   const racesList = getRaces(races);

   return (
      <div className="race">
         <Title classname="race__title" text={title} />
         <RacesList racesList={racesList} />
      </div>
   )

}

export default RacesContent;