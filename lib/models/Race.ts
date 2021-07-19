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
