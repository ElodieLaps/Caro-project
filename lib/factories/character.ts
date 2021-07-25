import Character from "../models/Character";
import Statistic from "../models/Statistic";
import Race from "../models/Race";

export const createCharacters = (
  characters: Array<any>,
  races: Array<Race>
): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    const race = races.find((race) => race.name === character.race) as Race;

    const raceStatistics = race.statistics as Array<Statistic>;
    const statistics = [] as Array<Statistic>;
    raceStatistics.forEach((stat) => {
      statistics.push(stat);
    });

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

    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      race,
      character.role,
      character.level,
      statistics
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

    let newHealthStat = newCharacter.statistics.find(
      (stat) => stat.type === "health"
    );
    const healthRaceStat =
      newCharacter.race.statistics &&
      newCharacter.race.statistics.find(
        (stat: Statistic) => stat.type === "health"
      );
    const updatedHealth = {
      ...newHealthStat,
      current: healthDataStat ? healthDataStat.current : healthRaceStat?.value,
    } as Statistic;

    let newManaStat = newCharacter.statistics.find(
      (stat) => stat.type === "mana"
    );
    const manaRaceStat =
      newCharacter.race.statistics &&
      newCharacter.race.statistics.find(
        (stat: Statistic) => stat.type === "mana"
      );
    const updatedMana = {
      ...newManaStat,
      current: manaDataStat ? manaDataStat.current : manaRaceStat?.value,
    } as Statistic;

    if (!newExperienceStat) {
      newCharacter.statistics.unshift(experience);
    }
    newCharacter.statistics.splice(1, 2, updatedHealth, updatedMana);

    newCharacter.updateStatisticsWithLevel();
    console.log("newCharacter", newCharacter);
    charactersList.push(newCharacter);
  });
  return charactersList;
};
