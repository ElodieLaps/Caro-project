import Statistic from "./Statistic";

export default class Character {
  id;
  name;
  gender;
  race;
  role;
  level;
  statistics;
  constructor(
    id: number,
    name: string,
    gender: string,
    race: string,
    role: string,
    level: number,
    statistics: Array<Statistic>
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.role = role;
    this.level = level;
    this.statistics = statistics;
  }

  getGender = (): string => {
    switch (this.gender) {
      case "F":
        return "♀";
      case "M":
        return "♂";
      default:
        return "Ø";
    }
  };

  getRace = (): string => {
    switch (this.race) {
      case "HUM":
        return this.gender === "F" ? "humaine" : "humain";
      case "ELF":
        return "elfe";
      case "DWA":
        return this.gender === "F" ? "naine" : "nain";
      default:
        return this.race;
    }
  };

  getRole = (): string => {
    switch (this.role) {
      case "MAGE":
        return this.gender === "F" ? "magicienne" : "magicien";
      case "PRST":
        return this.gender === "F" ? "prêtresse" : "prêtre";
      case "WARR":
        return this.gender === "F" ? "guerrière" : "guerrier";
      default:
        return this.role;
    }
  };

  getMaxHealth = () => {};
}

export const getCharacters = (characters: Array<any>): Array<Character> => {
  const charactersList: Array<Character> = [];

  characters.forEach((character: any) => {
    const newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      character.race,
      character.role,
      character.level,
      character.statistics
    );
    charactersList.push(newCharacter);
  });
  return charactersList;
};
