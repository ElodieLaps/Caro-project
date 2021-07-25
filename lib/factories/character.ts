import Character from "../models/Character";
import Statistic from "../models/Statistic";
import Race from "../models/Race";
import * as statConst from "../constants/STATISTICS";

export const createCharacter = (character: any, race: Race) => {
  const raceStatistics = race.statistics as Array<Statistic>;
  const statistics = [] as Array<Statistic>;
  raceStatistics.forEach((stat) => {
    statistics.push(stat);
  });

  const healthDataStat =
    character.statistics &&
    character.statistics.find(
      (stat: Statistic) => stat.type === statConst.HEALTH
    );
  const manaDataStat =
    character.statistics &&
    character.statistics.find(
      (stat: Statistic) => stat.type === statConst.MANA
    );
  const experienceDataStat =
    character.statistics &&
    character.statistics.find(
      (stat: Statistic) => stat.type === statConst.EXPERIENCE
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
    (stat) => stat.type === statConst.EXPERIENCE
  );
  let experience = {
    type: statConst.EXPERIENCE,
    label: "expérience",
    value: 100,
    current: 0,
    progress_index: 5,
  } as Statistic;
  if (experienceDataStat) {
    experience = { ...experience, current: experienceDataStat.current };
  }

  let newHealthStat = newCharacter.statistics.find(
    (stat) => stat.type === statConst.HEALTH
  );
  const healthRaceStat =
    newCharacter.race.statistics &&
    newCharacter.race.statistics.find(
      (stat: Statistic) => stat.type === statConst.HEALTH
    );
  const updatedHealth = {
    ...newHealthStat,
    current: healthDataStat ? healthDataStat.current : healthRaceStat?.value,
  } as Statistic;

  let newManaStat = newCharacter.statistics.find(
    (stat) => stat.type === statConst.MANA
  );
  const manaRaceStat =
    newCharacter.race.statistics &&
    newCharacter.race.statistics.find(
      (stat: Statistic) => stat.type === statConst.MANA
    );
  const updatedMana = {
    ...newManaStat,
    current: manaDataStat ? manaDataStat.current : manaRaceStat?.value,
  } as Statistic;

  if (!newExperienceStat) {
    newCharacter.statistics.unshift(experience);
  }
  newCharacter.statistics.splice(1, 2, updatedHealth, updatedMana);

  return newCharacter;
};

export const createCharactersList = (
  characters: Array<any>,
  races: Array<Race>
): Array<Character> => {
  const charactersList: Array<Character> = [];
  characters.forEach((character: any) => {
    const race = races.find((race) => race.name === character.race) as Race;
    const newCharacter = createCharacter(character, race);
    newCharacter.updateStatisticsWithLevel();
    charactersList.push(newCharacter);
  });
  return charactersList;
};
