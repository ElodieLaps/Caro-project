import raceApi from "../api/race";
import Character from "../models/Character";
import Race, { getRace } from "../models/Race";
import Statistic from "../models/Statistic";

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
    const characterStatistics = characterRace ? characterRace.statistics : [];
    console.log("race", characterRace);
    console.log("le sans", characterStatistics);
    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      characterRace,
      character.role,
      character.level,
      character.statistics
    );
    if (
      newCharacter.statistics &&
      !newCharacter.statistics.find((stat) => stat.type === "experience")
    ) {
      newCharacter.statistics.splice(0, 0, defaultExperience);
    }
    newCharacter.updateStatisticsWithLevel();
    console.log("newCharacter", newCharacter);
    charactersList.push(newCharacter);
  });
  return charactersList;
};
