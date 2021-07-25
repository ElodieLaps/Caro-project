import Character from "../../../lib/models/Character";
import { createCharactersList } from "../../../lib/factories/character";
import CharactersList from "../../organisms/CharactersList";
import Title from "../../atoms/Title";
import Race from "../../../lib/models/Race";

export type CharactersProps = {
   title: string;
   characters: Array<Character>;
   races: Array<Race>
}

const CharactersContent = ({ title, characters, races }: CharactersProps) => {
   const charactersList = createCharactersList(characters, races);
   return (
      <div className="character">
         <Title classname="character__title" text={title} />
         <CharactersList charactersList={charactersList} />
      </div>
   )
}

export default CharactersContent;