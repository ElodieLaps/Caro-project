import Statistic from "./Statistic";
import Statistics from "./Statistics";

export default class Race {
  name;
  statistics;
  availableRoles;
  constructor(
    name: string,
    statistics: Statistics,
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

  getName2() {
    return "coucou";
  }
}

export const getRaces = (races: Array<any>): Array<Race> => {
  const racesList: Array<Race> = [];

  races.forEach((race: any) => {
    const newRace = new Race(
      race.name,
      new Statistics(
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        ),
        new Statistic(
          "health",
          "points de vie",
          race.statistics.value,
          race.statistics.value
        )
      ),
      race.availableRoles
    );
    racesList.push(newRace);
  });
  return racesList;
};
