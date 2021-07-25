import Race from "../models/Race";

export const createAllRaces = (races: Array<any>): Array<Race> => {
  const racesList: Array<Race> = [];

  races.forEach((race: any) => {
    const newRace = new Race(race.name, race.statistics, race.availableRoles);
    racesList.push(newRace);
  });
  return racesList;
};
