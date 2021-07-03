class Statistic {
  label: string;
  max;
  current;
  regen;
  constructor(label: string, max: number, current: number, regen: number) {
    this.label = label;
    this.max = max;
    this.current = current;
    this.regen = regen;
  }
}

export default Statistic;
