import equipments from "../../lib/data/equipments.json";

const equipmentsApi = {
  getAllEquipments: () => {
    return equipments;
  },
};

export default equipmentsApi;
