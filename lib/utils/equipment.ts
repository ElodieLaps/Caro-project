import Equipment from "../../lib/models/Equipment";

export const findEquipment = {
  head: (equipment: Equipment, equipments: any) => {
    switch (equipment.type) {
      case "TIARA":
        return equipments.head.tiaras.find(
          (item: Equipment) => item.name === equipment.name
        );
      case "HELMET":
        return equipments.head.helmets.find(
          (item: Equipment) => item.name === equipment.name
        );
      default:
        return console.log("pas trouvé head");
    }
  },

  weapon: (equipment: Equipment, equipments: any) => {
    switch (equipment.type) {
      case "KNIVE":
        return equipments.weapons.knives.find(
          (item: Equipment) => item.name === equipment.name
        );
      case "MAGIC_STICK":
        return equipments.weapons.magic_sticks.find(
          (item: Equipment) => item.name === equipment.name
        );
      case "SWORD":
        return equipments.weapons.swords.find(
          (item: Equipment) => item.name === equipment.name
        );
      default:
        return console.log("pas trouvé weapon");
    }
  },
};
export default findEquipment;
