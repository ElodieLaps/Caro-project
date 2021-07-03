import Character, { getCharacters } from "../../../lib/models/Character";
import CharactersList from "../../organisms/CharactersList";
export type HomeProps = {
   title: string;
   characters: Array<Character>;
}

const HomeContent = ({ title, characters }: HomeProps) => {
   const charactersList = getCharacters(characters);

   return (
      <div className="home">
         <h1 className="home__title">{title}</h1>
         <CharactersList charactersList={charactersList} />
      </div>
   )
}

export default HomeContent;