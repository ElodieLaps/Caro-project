import Equipment from "../../lib/models/Equipment";
import * as types from "../../lib/constants/EQUIPMENTS";
import { EquipmentRef } from "../../pages/api/equipment";
import { HeadEquipmentsType } from "../../pages/api/equipment/head";
import { WeaponEquipmentsType } from "../../pages/api/equipment/weapon";

export const findEquipment = {
  head: (equipment: EquipmentRef, equipments: HeadEquipmentsType) => {
    switch (equipment.type) {
      case types.TIARA:
        return equipments.tiaras.find(
          (item: Equipment) => item.name === equipment.name
        );
      case types.HELMET:
        return equipments.helmets.find(
          (item: Equipment) => item.name === equipment.name
        );
      default:
        return console.log("pas trouvé head");
    }
  },

  weapon: (equipment: EquipmentRef, equipments: WeaponEquipmentsType) => {
    switch (equipment.type) {
      case types.KNIFE:
        return equipments.knives.find(
          (item: Equipment) => item.name === equipment.name
        );
      case types.MAGIC_STICK:
        return equipments.magic_sticks.find(
          (item: Equipment) => item.name === equipment.name
        );
      case types.SWORD:
        return equipments.swords.find(
          (item: Equipment) => item.name === equipment.name
        );
      default:
        return console.log("pas trouvé weapon");
    }
  },
};
export default findEquipment;
