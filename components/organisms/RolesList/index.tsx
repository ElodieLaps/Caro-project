
import Role from "../../../lib/models/Role";

type RolesListType = {
   rolesList: Array<Role>;
};

const RolesList = ({ rolesList }: RolesListType) => {
   return (
      <div className="roles-list">
         {rolesList.map((role: Role) => {
            return (
               <p key={role.name}>{role.name}</p>
            )
         })}
      </div>
   )
}

export default RolesList;