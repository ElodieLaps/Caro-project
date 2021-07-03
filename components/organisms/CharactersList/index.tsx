import Character from "../../../lib/models/Character";
import CharacterCard from "../../molecules/Character";

type CharactersListType = {
   charactersList: Array<Character>;
};

const CharactersList = ({ charactersList }: CharactersListType) => {
   return (
      <div className="characters-list">
         {charactersList.map((character: Character) => {
            return (
               <CharacterCard key={character.id}
                  character={character}
               />
            )
         })}
      </div>
   )
}

export default CharactersList;