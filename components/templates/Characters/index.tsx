import Character from "../../../lib/models/Character";
import { createCharacters } from "../../../lib/factories/character";
import CharactersList from "../../organisms/CharactersList";
import Title from "../../atoms/Title";

export type CharactersProps = {
   title: string;
   characters: Array<Character>;
}

const CharactersContent = ({ title, characters }: CharactersProps) => {
   const charactersList = createCharacters(characters);
   return (
      <div className="character">
         <Title classname="character__title" text={title} />
         <CharactersList charactersList={charactersList} />
      </div>
   )
}

export default CharactersContent;