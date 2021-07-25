import Character from "../models/Character";
import Statistic from "../models/Statistic";
import Race from "../models/Race";
import Role from "../models/Role";
import Equipment from "../models/Equipment";
import * as statConst from "../constants/STATISTICS";

export const createCharacter = (
  character: any,
  race: Race,
  role: Role,
  equipments: Array<Equipment>
) => {
  const raceStatistics = race.statistics as Array<Statistic>;
  const statistics = [] as Array<Statistic>;
  raceStatistics.forEach((stat) => {
    statistics.push(stat);
  });

  const characterEquipments: Array<Equipment> = [];
  character.equipments &&
    character.equipments.forEach((item: string) => {
      const newEquipment = equipments.find(
        (dataItem) => dataItem.name === item
      ) as Equipment;
      characterEquipments.push(newEquipment);
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
    role,
    character.level,
    statistics,
    characterEquipments
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
  races: Array<Race>,
  roles: Array<Role>,
  equipments: Array<Equipment>
): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    const race = races.find((race) => race.name === character.race) as Race;
    const role = roles.find((role) => role.name === character.role) as Role;

    const newCharacter = createCharacter(character, race, role, equipments);

    newCharacter.updateStatisticsWithLevel();

    newCharacter.equipments.forEach((item) => {
      newCharacter.addEquipment(item);
    });

    charactersList.push(newCharacter);
  });
  console.log(charactersList);
  return charactersList;
};
