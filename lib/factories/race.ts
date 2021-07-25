import Race from "../models/Race";

export const createRace = (race: any): Race => {
  const newRace = new Race(race.name, race.statistics, race.availableRoles);
  return newRace;
};

export const createRacesList = (races: Array<any>): Array<Race> => {
  const racesList: Array<Race> = [];

  races.forEach((race: any) => {
    const newRace = createRace(race);
    racesList.push(newRace);
  });
  return racesList;
};
