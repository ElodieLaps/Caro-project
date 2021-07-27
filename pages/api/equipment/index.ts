import headEquipmentsApi from "./head";
import weaponsEquipmentsApi from "./weapons";

const equipmentsApi = {
  getAllEquipments: () => {
    const head = headEquipmentsApi.getAllEquipments();
    const weapons = weaponsEquipmentsApi.getAllEquipments();

    return {
      head,
      weapons,
    };
  },
  findEquipment: (position: string, type: string, name: string) => {
    switch (position) {
      case "HEAD":
        return headEquipmentsApi.findEquipment(type, name);
      case "WEAPON":
        return weaponsEquipmentsApi.findEquipment(type, name);
      default:
        return console.log("pas trouvé :(");
    }
  },
};

export default equipmentsApi;
