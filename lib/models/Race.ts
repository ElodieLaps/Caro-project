import raceApi from "../api/race";
import Statistic from "./Statistic";

export default class Race {
  name;
  statistics;
  availableRoles;
  constructor(
    name: string,
    statistics: Array<Statistic>,
    availableRoles: Array<string>
  ) {
    this.name = name;
    this.statistics = statistics;
    this.availableRoles = availableRoles;
  }
  getName = (): string => {
    switch (this.name) {
      case "HUM":
        return "humaine";
      case "ELF":
        return "elfique";
      case "DWA":
        return "naine";
      default:
        return this.name;
    }
  };
}

export const getRaces = (races: Array<any>): Array<Race> => {
  const racesList: Array<Race> = [];

  races.forEach((race: any) => {
    const newRace = new Race(race.name, race.statistics, race.availableRoles);
    racesList.push(newRace);
  });

  return racesList;
};

export const getRace = (race: string) => {
  const allRaces = raceApi.getAllRaces();
  switch (race) {
    case "HUM":
      return allRaces.find((race) => race.name === "HUM");
    case "ELF":
      return allRaces.find((race) => race.name === "ELF");
    case "DWA":
      return allRaces.find((race) => race.name === "DWA");
    default:
      "any";
  }
};
