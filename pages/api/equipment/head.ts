import tiaras from "../../../lib/data/equipments/head/tiaras.json";
import helmets from "../../../lib/data/equipments/head/helmets.json";
import Equipment from "../../../lib/models/Equipment";

export type HeadEquipmentsType = {
  tiaras: Array<Equipment>;
  helmets: Array<Equipment>;
};

const headEquipmentsApi = {
  getAllEquipments: () => {
    return {
      tiaras,
      helmets,
    } as unknown as HeadEquipmentsType;
  },
};

export default headEquipmentsApi;
