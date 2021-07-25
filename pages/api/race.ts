import races from "../../lib/data/races.json";
import * as racesConst from "../../lib/constants/RACES";
const raceApi = {
  getAllRaces: () => {
    return races;
  },
  getRace: (race: string) => {
    const allRaces = raceApi.getAllRaces();
    switch (race) {
      case racesConst.HUMAN:
        return allRaces.find((race) => race.name === racesConst.HUMAN);
      case racesConst.ELF:
        return allRaces.find((race) => race.name === racesConst.ELF);
      case racesConst.DWARF:
        return allRaces.find((race) => race.name === racesConst.DWARF);
      default:
        "any";
    }
  },
};

export default raceApi;
