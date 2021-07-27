import tiaras from "../../../lib/data/equipments/head/tiaras.json";
import helmets from "../../../lib/data/equipments/head/helmets.json";

const headEquipmentsApi = {
  getAllEquipments: () => {
    return {
      tiaras,
      helmets,
    };
  },
  findEquipment: (type: string, name: string) => {
    const allEquipments = headEquipmentsApi.getAllEquipments();
    switch (type) {
      case "TIARA":
        return allEquipments.tiaras.find(
          (equipment) => equipment.name === name
        );
      case "HELMET":
        return allEquipments.helmets.find(
          (equipment) => equipment.name === name
        );
      default:
        return console.log("pas trouvé dans le chapeau :(");
    }
  },
};

export default headEquipmentsApi;
