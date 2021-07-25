import roles from "../data/roles.json";

const roleApi = {
  getAllRoles: setTimeout(() => {
    return roles;
  }, 2000),
};

export default roleApi;
