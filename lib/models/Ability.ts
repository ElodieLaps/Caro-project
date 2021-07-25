import Effect from "./Effect";

export default class Ability {
  name;
  effects;
  constructor(name: string, effects: Array<Effect>) {
    this.name = name;
    this.effects = effects;
  }
}
