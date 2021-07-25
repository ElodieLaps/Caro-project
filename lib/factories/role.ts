import Role from "../models/Role";

export const createRole = (role: any): Role => {
  const newRole = new Role(
    role.name,
    role.availableEquipmentTypes,
    role.availableAbilities
  );
  return newRole;
};

export const createRolesList = (roles: Array<any>): Array<Role> => {
  const rolesList: Array<Role> = [];
  roles.forEach((role: any) => {
    const newRole = createRole(role);
    rolesList.push(newRole);
  });
  return rolesList;
};
