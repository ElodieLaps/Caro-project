import Character from "../../../lib/models/Character";
import { createCharacters } from "../../../lib/factories/character";
import CharactersList from "../../organisms/CharactersList";

export type CharactersProps = {
   title: string;
   characters: Array<Character>;
}

const CharactersContent = ({ title, characters }: CharactersProps) => {
   const charactersList = createCharacters(characters);
   return (
      <div className="home">
         <h1 className="home__title">{title}</h1>
         <CharactersList charactersList={charactersList} />
      </div>
   )
}

export default CharactersContent;