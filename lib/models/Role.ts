export default class Role {
  name;
  availableItemTypes;
  availableAbilities;
  constructor(
    name: string,
    availableItemTypes: Array<any>,
    availableAbilities: Array<any>
  ) {
    this.name = name;
    this.availableItemTypes = availableItemTypes;
    this.availableAbilities = availableAbilities;
  }
}
