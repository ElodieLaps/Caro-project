export default class Experience {
  type;
  label;
  max;
  current;
  constructor(type: string, label: string, max: number, current: number) {
    this.type = type;
    this.label = label;
    this.max = max;
    this.current = current;
  }

  getNextlevel = () => console.log("niveau suivant");
}
