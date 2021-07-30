import Race from "./Race";
import Statistic from "./Statistic";
import Equipment from "./Equipment";
import * as races from "../constants/RACES";
import * as genders from "../constants/GENDERS";
import * as roles from "../constants/ROLES";
import * as stats from "../constants/STATISTICS";
import Role from "./Role";

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
    role: Role,
    level: number,
    statistics: Array<Statistic>,
    equipments: Array<Equipment>
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
    switch (this.role.name) {
      case roles.MAGE:
        return this.gender === genders.FEMALE ? "magicienne" : "magicien";
      case roles.PRIEST:
        return this.gender === genders.FEMALE ? "prêtresse" : "prêtre";
      case roles.WARRIOR:
        return this.gender === genders.FEMALE ? "guerrière" : "guerrier";
      default:
        return this.role.name;
    }
  };

  addEquipment = (equipment: Equipment): Array<Equipment> => {
    const updatedEquipments = this.equipments;
    const itemInPosition = this.equipments.find(
      (item) => item.position === equipment.position
    );

    if (!itemInPosition) {
      updatedEquipments.push(equipment);
    }
    if (itemInPosition) {
      if (itemInPosition.name === equipment.name) {
      } else {
        let index = this.equipments.indexOf(itemInPosition);
        [...updatedEquipments, (updatedEquipments[index] = equipment)];
      }
    }
    equipment.statistics.forEach((stat) => {
      this.setStatisticValue(stat.type, stat.value);
    });

    return (this.equipments = updatedEquipments);
  };

  getStatistic = (type: string): Statistic => {
    return this.statistics.find((stat) => stat.type === type) as Statistic;
  };
  setStatisticValue = (type: string, value: number): Array<Statistic> => {
    const statistic = this.getStatistic(type);
    let updatedStatistic = statistic;
    let updatedStatistics = this.statistics;

    updatedStatistics.forEach((stat, index) => {
      if (stat.type === statistic.type) {
        updatedStatistic = { ...updatedStatistic, value: stat.value + value };
        if (stat.current) {
          updatedStatistic = {
            ...updatedStatistic,
            current: stat.current + value,
          };
        }
        updatedStatistics = [
          ...updatedStatistics,
          (updatedStatistics[index] = updatedStatistic),
        ];
      }
    });

    return updatedStatistics;
  };
  setStatisticCurrent = (type: string, current: number): Array<Statistic> => {
    const statistic = this.getStatistic(type);
    const updatedStatistic = { ...statistic, current: current };
    const updatedStatistics = this.statistics;

    updatedStatistics.forEach((stat) => {
      if (stat.type === updatedStatistic.type) {
        stat = updatedStatistic;
      }
    });
    console.log(updatedStatistic);
    return updatedStatistics;
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

      updatedStatistics.forEach((statistic: Statistic) => {
        if (statistic.type === "experience") {
          statistic = updatedExperience;
        }
      });
    }
    this.updateStatisticsWithLevel();
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
