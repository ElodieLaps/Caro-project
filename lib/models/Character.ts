export default class Character {
  id;
  name;
  gender;
  race;
  role;
  level;
  constructor(
    id: number,
    name: string,
    gender: string,
    race: string,
    role: string,
    level: number
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.role = role;
    this.level = level;
  }

  getGender = () => {
    switch (this.gender) {
      case "F":
        return "♀";
      case "M":
        return "♂";
      default:
        "Ø";
    }
  };

  getRace = () => {
    switch (this.race) {
      case "HUM":
        return this.gender === "F" ? "humaine" : "humain";
      case "ELF":
        return "elfe";
      case "DWA":
        return this.gender === "F" ? "naine" : "nain";
      default:
        "Ø";
    }
  };

  getRole = () => {
    switch (this.role) {
      case "MAGE":
        return this.gender === "F" ? "magicienne" : "magicien";
      case "PRST":
        return this.gender === "F" ? "prêtresse" : "prêtre";
      case "WARR":
        return this.gender === "F" ? "guerrière" : "guerrier";
      default:
        "Ø";
    }
  };
}

export const getCharacters = (characters: Array<any>): Array<Character> => {
  const charactersList: Array<Character> = [];
  characters.forEach((character: any) => {
    let newCharacter = new Character(
      character.id,
      character.name,
      character.gender,
      character.race,
      character.role,
      character.level
    );
    charactersList.push(newCharacter);
  });
  return charactersList;
};