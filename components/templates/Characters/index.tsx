import Character from "../../../lib/models/Character";
import { createCharactersList } from "../../../lib/factories/character";
import CharactersList from "../../organisms/CharactersList";
import Title from "../../atoms/Title";
import Race from "../../../lib/models/Race";
import Role from "../../../lib/models/Role";
import Equipment from "../../../lib/models/Equipment";

export type CharactersProps = {
   title: string;
   characters: Array<Character>;
   races: Array<Race>;
   roles: Array<Role>;
   equipments: Array<Equipment>
}

const CharactersContent = ({ title, characters, races, roles, equipments }: CharactersProps) => {
   const charactersList = createCharactersList(characters, races, roles, equipments);
   return (
      <div className="character">
         <Title classname="character__title" text={title} />
         <CharactersList charactersList={charactersList} />
      </div>
   )
}

export default CharactersContent;