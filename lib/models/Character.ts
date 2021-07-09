import Experience from "./Experience";
import Statistic from "./Statistic";
import Statistics from "./Statistics";

export default class Character {
  id;
  name;
  gender;
  race;
  role;
  level;
  experience;
  statistics;
  constructor(
    id: number,
    name: string,
    gender: string,
    race: string,
    role: string,
    level: number,
    experience: Experience,
    statistics: Statistics
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.role = role;
    this.level = level;
    this.experience = experience;
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
      new Experience(
        "exp",
        "experience",
        character.experience.toNextlvl,
        character.experience.current
      ),
      new Statistics(
        new Statistic(
          "health",
          "points de vie",
          character.statistics.health.max,
          character.statistics.health.current,
          character.statistics.health.progress_index
        ),
        new Statistic(
          "health-regen",
          "guérison",
          character.statistics.health_regen.value,
          character.statistics.health_regen.value,
          character.statistics.health_regen.progress_index
        ),
        new Statistic(
          "mana",
          "points de mana",
          character.statistics.mana.max,
          character.statistics.mana.current,
          character.statistics.mana.progress_index
        ),
        new Statistic(
          "mana-regen",
          "régénération",
          character.statistics.mana_regen.value,
          character.statistics.mana_regen.value,
          character.statistics.mana_regen.progress_index
        ),
        new Statistic(
          "attack-damages",
          "dégâts physiques",
          character.statistics.attack_damages.value,
          character.statistics.attack_damages.value,
          character.statistics.attack_damages.progress_index
        ),
        new Statistic(
          "dark-power",
          "magie noire",
          character.statistics.dark_power.value,
          character.statistics.dark_power.value,
          character.statistics.dark_power.progress_index
        ),
        new Statistic(
          "light-power",
          "magie sacrée",
          character.statistics.light_power.value,
          character.statistics.light_power.value,
          character.statistics.light_power.progress_index
        ),
        new Statistic(
          "armor",
          "armure",
          character.statistics.armor.value,
          character.statistics.armor.value,
          character.statistics.armor.progress_index
        ),
        new Statistic(
          "protection",
          "protection",
          character.statistics.protection.value,
          character.statistics.protection.value,
          character.statistics.protection.progress_index
        ),
        new Statistic(
          "blessing",
          "bénédiction",
          character.statistics.blessing.value,
          character.statistics.blessing.value,
          character.statistics.blessing.progress_index
        ),
        new Statistic(
          "swiftness",
          "rapidité",
          character.statistics.swiftness.value,
          character.statistics.swiftness.value,
          character.statistics.swiftness.progress_index
        ),
        new Statistic(
          "dodge",
          "esquive",
          character.statistics.dodge.value,
          character.statistics.dodge.value,
          character.statistics.dodge.progress_index
        )
      )
    );
    charactersList.push(newCharacter);
  });
  return charactersList;
};
