import State from "../models/State";
export default class Effect {
  name;
  nbTurns;
  value;
  state;
  constructor(name: string, nbTurns: number, value: number, state: State) {
    this.name = name;
    this.nbTurns = nbTurns;
    this.value = value;
    this.state = state;
  }
}
