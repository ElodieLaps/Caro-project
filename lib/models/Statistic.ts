class Statistic {
  type: string;
  label: string;
  value;
  current;
  progress_index;
  constructor(
    type: string,
    label: string,
    value: number,
    progress_index: number,
    current?: number
  ) {
    this.type = type;
    this.label = label;
    this.value = value;
    this.current = current;
    this.progress_index = progress_index;
  }
}

export default Statistic;
