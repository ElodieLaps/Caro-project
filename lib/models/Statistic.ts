class Statistic {
  type: string;
  label: string;
  max;
  current;
  progress_index;
  constructor(
    type: string,
    label: string,
    max: number,
    progress_index: number,
    current?: number
  ) {
    this.type = type;
    this.label = label;
    this.max = max;
    this.current = current;
    this.progress_index = progress_index;
  }
}

export default Statistic;
