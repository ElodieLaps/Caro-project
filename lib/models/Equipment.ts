import Ability from "./Ability";
import Statistic from "./Statistic";

export default class Item {
  name;
  label;
  type;
  position;
  statistics;
  abilities;
  constructor(
    name: string,
    label: string,
    type: string,
    position: string,
    statistics: Array<Statistic>,
    abilities: Array<Ability>
  ) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.position = position;
    this.statistics = statistics;
    this.abilities = abilities;
  }
}
