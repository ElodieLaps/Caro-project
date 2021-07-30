import findEquipment from "../../../lib/utils/equipment";
import headEquipmentsApi, { HeadEquipmentsType } from "./head";
import weaponEquipmentsApi, { WeaponEquipmentsType } from "./weapon";

export type EquipmentsType = {
  head: HeadEquipmentsType;
  weapons: WeaponEquipmentsType;
};

export type EquipmentRef = {
  position: string;
  type: string;
  name: string;
};

const equipmentsApi = {
  getAllEquipments: () => {
    const head = headEquipmentsApi.getAllEquipments();
    const weapons = weaponEquipmentsApi.getAllEquipments();
    return {
      head,
      weapons,
    };
  },
  findEquipment: (equipment: EquipmentRef) => {
    let equipments;
    switch (equipment.position) {
      case "HEAD":
        equipments = headEquipmentsApi.getAllEquipments();
        return findEquipment.head(equipment, equipments);
      case "WEAPON":
        equipments = weaponEquipmentsApi.getAllEquipments();
        return findEquipment.weapon(equipment, equipments);
      default:
        return console.log("pas trouvé :(");
    }
  },
};

export default equipmentsApi;
