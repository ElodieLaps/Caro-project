import knives from "../../../lib/data/equipments/weapon/knives.json";

import magic_sticks from "../../../lib/data/equipments/weapon/magic_sticks.json";
import swords from "../../../lib/data/equipments/weapon/swords.json";

const weaponsEquipmentsApi = {
  getAllEquipments: () => {
    return {
      knives,
      magic_sticks,
      swords,
    };
  },
  findEquipment: (type: string, name: string) => {
    const allEquipments = weaponsEquipmentsApi.getAllEquipments();
    switch (type) {
      case "KNIFE":
        return allEquipments.knives.find(
          (equipment) => equipment.name === name
        );
      case "MAGIC_STICK":
        return allEquipments.magic_sticks.find(
          (equipment) => equipment.name === name
        );
      case "SWORD":
        return allEquipments.swords.find(
          (equipment) => equipment.name === name
        );
      default:
        return console.log("pas trouvé l'arme :(");
    }
  },
};

export default weaponsEquipmentsApi;
