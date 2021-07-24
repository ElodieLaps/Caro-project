import Race from "./Race";
import Statistic from "./Statistic";
import * as races from "../constants/RACES";
import * as genders from "../constants/GENDERS";
import * as roles from "../constants/ROLES";

export default class Character {
  id;
  name;
  gender;
  race;
  role;
  level;
  statistics;
  equipments;
  constructor(
    id: number,
    name: string,
    gender: string,
    race: Race,
    role: string,
    level: number,
    statistics: Array<Statistic>,
    equipments?: any
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.role = role;
    this.level = level;
    this.statistics = statistics;
    this.equipments = equipments;
  }

  getGender = (): string => {
    switch (this.gender) {
      case genders.FEMALE:
        return "♀";
      case genders.MALE:
        return "♂";
      default:
        return "Ø";
    }
  };

  getRace = (): string => {
    switch (this.race.name) {
      case races.HUMAN:
        return this.gender === genders.FEMALE ? "humaine" : "humain";
      case races.ELF:
        return "elfe";
      case races.DWARF:
        return this.gender === genders.FEMALE ? "naine" : "nain";
      default:
        return this.race.name;
    }
  };

  getRole = (): string => {
    switch (this.role) {
      case roles.MAGE:
        return this.gender === genders.FEMALE ? "magicienne" : "magicien";
      case roles.PRIEST:
        return this.gender === genders.FEMALE ? "prêtresse" : "prêtre";
      case roles.WARRIOR:
        return this.gender === genders.FEMALE ? "guerrière" : "guerrier";
      default:
        return this.role;
    }
  };

  levelUp = (): Array<Statistic> => {
    const updatedStatistics: Array<Statistic> = this.statistics;
    const [experience] = this.statistics.filter(
      (statistic: Statistic) => statistic.type === "experience"
    );
    if (experience.current && experience.current >= experience.value) {
      const updatedExperience: Statistic = experience;
      this.level + 1;
      updatedExperience.setCurrent(experience.current - experience.value);
      updatedExperience.setValue(experience.value + experience.progress_index);

      /* const updatedExperience = {
        ...experience,
        current: experience.current - experience.value,
        value: ,
      }; */

      updatedStatistics.forEach((statistic: Statistic) => {
        if (statistic.type === "experience") {
          statistic = updatedExperience;
        }
      });
    }
    return this.statistics;
  };

  updateStatisticsWithLevel = (): Array<Statistic> => {
    const updatedStatistics: Array<Statistic> = [];
    if (this.level > 1) {
      for (let i = 0; i < this.level; i++) {
        this.statistics.forEach((statistic: Statistic) => {
          const updatedValue: number = Math.round(
            statistic.value + statistic.progress_index * this.level
          );
          const updatedStatistic: Statistic = {
            ...statistic,
            value: updatedValue,
          };
          updatedStatistics.push(updatedStatistic);
        });
        return (this.statistics = updatedStatistics);
      }
    }
    return this.statistics;
  };
}
