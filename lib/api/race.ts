import races from "../data/races.json";

const raceApi = {
  getAllRaces: () => {
    return races;
  },
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

export default raceApi;
