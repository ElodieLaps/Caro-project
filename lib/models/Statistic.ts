class Statistic {
  type: string;
  label: string;
  max;
  current;
  regen;
  constructor(
    type: string,
    label: string,
    max: number,
    current: number,
    regen: number
  ) {
    this.type = type;
    this.label = label;
    this.max = max;
    this.current = current;
    this.regen = regen;
  }
}

export default Statistic;
