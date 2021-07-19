import Character from "../models/Character";
import { getRace } from "../api/race";
import Statistic from "../models/Statistic";
import Race from "../models/Race";

export const createCharacters = (characters: Array<any>): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    let experience = {
      type: "experience",
      label: "expérience",
      value: 100,
      current: 0,
      progress_index: 5,
    } as Statistic;

    const characterRace = getRace(character.race) as Race;
    const characterStatistics: Array<Statistic> = characterRace
      ? characterRace.statistics
      : [];

    const healthDataStat =
      character.statistics &&
      character.statistics.find((stat: Statistic) => stat.type === "health");
    const manaDataStat =
      character.statistics &&
      character.statistics.find((stat: Statistic) => stat.type === "mana");
    const experienceDataStat =
      character.statistics &&
      character.statistics.find(
        (stat: Statistic) => stat.type === "experience"
      );

    if (experienceDataStat) {
      experience = { ...experience, current: experienceDataStat.current };
    }

    const healthRaceStat =
      characterStatistics &&
      characterStatistics.find((stat: Statistic) => stat.type === "health");
    const manaRaceStat =
      characterStatistics &&
      characterStatistics.find((stat: Statistic) => stat.type === "mana");

    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      characterRace,
      character.role,
      character.level,
      characterStatistics
    );

    const newExperienceStat = newCharacter.statistics.find(
      (stat) => stat.type === "experience"
    );
    let newHealthStat = newCharacter.statistics.find(
      (stat) => stat.type === "health"
    );
    let newManaStat = newCharacter.statistics.find(
      (stat) => stat.type === "mana"
    );

    if (!newExperienceStat) {
      newCharacter.statistics.splice(0, 0, experience);
    }
    if (newHealthStat) {
      const current = healthDataStat
        ? healthDataStat.current
        : healthRaceStat?.value;
      newHealthStat = { ...newHealthStat, current: current } as Statistic;
      newCharacter.statistics.splice(1, 1, newHealthStat);
    }
    if (newManaStat) {
      const current = manaDataStat ? manaDataStat.current : manaRaceStat?.value;
      newManaStat = { ...newManaStat, current: current } as Statistic;
      newCharacter.statistics.splice(2, 2, newManaStat);
    }

    newCharacter.updateStatisticsWithLevel();
    console.log("newCharacter", newCharacter);
    charactersList.push(newCharacter);
  });
  return charactersList;
};
