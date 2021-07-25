export default class Role {
  name;
  availableEquipmentTypes;
  availableAbilities;
  constructor(
    name: string,
    availableEquipmentTypes: Array<any>,
    availableAbilities: Array<any>
  ) {
    this.name = name;
    this.availableEquipmentTypes = availableEquipmentTypes;
    this.availableAbilities = availableAbilities;
  }
}
