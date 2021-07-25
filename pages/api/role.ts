import roles from "../../lib/data/roles.json";

const roleApi = {
  getAllRoles: () => {
    return roles;
  },
};

export default roleApi;
