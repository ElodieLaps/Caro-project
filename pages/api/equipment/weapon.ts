import knives from "../../../lib/data/equipments/weapon/knives.json";
import magic_sticks from "../../../lib/data/equipments/weapon/magic_sticks.json";
import swords from "../../../lib/data/equipments/weapon/swords.json";
import Equipment from "../../../lib/models/Equipment";

export type WeaponEquipmentsType = {
  knives: Array<Equipment>;
  magic_sticks: Array<Equipment>;
  swords: Array<Equipment>;
};
const weaponEquipmentsApi = {
  getAllEquipments: () => {
    return {
      knives,
      magic_sticks,
      swords,
    } as unknown as WeaponEquipmentsType;
  },
};

export default weaponEquipmentsApi;
