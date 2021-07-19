import Character from "../models/Character";
import { getRace } from "../api/race";
import Statistic from "../models/Statistic";
import Race from "../models/Race";

export const createCharacters = (characters: Array<any>): Array<Character> => {
  const charactersList: Array<Character> = [];
  const defaultExperience = {
    type: "experience",
    label: "expérience",
    value: 100,
    current: 0,
    progress_index: 5,
  } as Statistic;

  characters.forEach((character: any) => {
    const characterRace = getRace(character.race) as Race;
    const characterStatistics: Array<Statistic> = characterRace
      ? characterRace.statistics
      : [];
    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      characterRace,
      character.role,
      character.level,
      characterStatistics
    );
    if (
      characterStatistics &&
      !characterStatistics.find((stat) => stat.type === "experience")
    ) {
      characterStatistics.splice(0, 0, defaultExperience);
    }
    newCharacter.updateStatisticsWithLevel();
    console.log("newCharacter", newCharacter);
    charactersList.push(newCharacter);
  });
  return charactersList;
};
