import Character from "../models/Character";
import Statistic from "../models/Statistic";
import Race from "../models/Race";

export const createCharacters = (
  characters: Array<any>,
  races: Array<Race>
): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    //get character race from race list
    const race = races.find((race) => race.name === character.race) as Race;

    //get statistics from race
    const raceStatistics = race ? (race.statistics as Array<Statistic>) : [];

    const statistics = [] as Array<Statistic>;
    raceStatistics.forEach((stat) => {
      statistics.push(stat);
    });

    //get current value if current value in data for stat bars
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

    //create a new character
    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      race,
      character.role,
      character.level,
      statistics
    );

    //get race stat default value for stat bars to set current
    const healthRaceStat =
      newCharacter.race.statistics &&
      newCharacter.race.statistics.find(
        (stat: Statistic) => stat.type === "health"
      );
    const manaRaceStat =
      newCharacter.race.statistics &&
      newCharacter.race.statistics.find(
        (stat: Statistic) => stat.type === "mana"
      );

    //create or update statistics bar
    //Experience
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

    //Health
    let newHealthStat = newCharacter.statistics.find(
      (stat) => stat.type === "health"
    );
    //create current value and set
    const updatedHealth = {
      ...newHealthStat,
      current: healthDataStat ? healthDataStat.current : healthRaceStat?.value,
    } as Statistic;

    //Mana
    let newManaStat = newCharacter.statistics.find(
      (stat) => stat.type === "mana"
    );
    //create current value and set
    const updatedMana = {
      ...newManaStat,
      current: manaDataStat ? manaDataStat.current : manaRaceStat?.value,
    } as Statistic;

    //put all in statistic array
    if (!newExperienceStat) {
      newCharacter.statistics.unshift(experience);
    }
    newCharacter.statistics.splice(1, 2, updatedHealth, updatedMana);

    //update statistics
    newCharacter.updateStatisticsWithLevel();

    console.log("newCharacter", newCharacter);

    //put new character in characters list
    charactersList.push(newCharacter);
  });
  return charactersList;
};
