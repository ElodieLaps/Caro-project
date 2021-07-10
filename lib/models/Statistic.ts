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

  setLabel = (label: string): string => {
    return (this.label = label);
  };

  setValue = (value: number): number => {
    return (this.value = value);
  };

  setCurrent = (currentValue: number): number => {
    return (this.current = currentValue);
  };
}

export default Statistic;
