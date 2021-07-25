export default class Effect {
  type; //damage //healing //status
  nbTurns;
  value;
  constructor(type: string, nbTurns: number, value: number) {
    this.type = type;
    this.nbTurns = nbTurns;
    this.value = value;
  }
}
