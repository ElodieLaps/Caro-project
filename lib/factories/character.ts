import Character from "../models/Character";
import Statistic from "../models/Statistic";
import Race from "../models/Race";

export const createCharacters = (
  characters: Array<any>,
  races: Array<Race>
): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    const characterRace = races.find(
      (race) => race.name === character.race
    ) as Race;

    const characterStatistics = characterRace
      ? (characterRace.statistics as Array<Statistic>)
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
    let experience = {
      type: "experience",
      label: "expérience",
      value: 100,
      current: 0,
      progress_index: 5,
    } as Statistic;
    if (experienceDataStat) {
      experience = { ...experience, current: experienceDataStat.current };
    }
    if (!newExperienceStat) {
      newCharacter.statistics.unshift(experience);
    }

    let newHealthStat = newCharacter.statistics.find(
      (stat) => stat.type === "health"
    );
    const updatedHealth = {
      ...newHealthStat,
      current: healthDataStat ? healthDataStat.current : healthRaceStat?.value,
    } as Statistic;
    newCharacter.statistics.forEach((stat) => {
      if (stat.type === "health" && !stat.current) {
        newCharacter.statistics.splice(1, 1, updatedHealth);
      }
    });

    let newManaStat = newCharacter.statistics.find(
      (stat) => stat.type === "mana"
    );
    const updatedMana = {
      ...newManaStat,
      current: manaDataStat ? manaDataStat.current : manaRaceStat?.value,
    } as Statistic;
    newCharacter.statistics.forEach((stat) => {
      if (stat.type === "mana" && !stat.current) {
        newCharacter.statistics.splice(2, 1, updatedMana);
      }
    });

    newCharacter.updateStatisticsWithLevel();
    console.log("newCharacter", newCharacter);
    charactersList.push(newCharacter);
  });
  return charactersList;
};
