
import Role from "../../../lib/models/Role";

type RolesListType = {
   rolesList: Array<Role>;
};

const RolesList = ({ rolesList }: RolesListType) => {
   return (
      <div className="roles-list">
         {rolesList.map((role: Role) => {
            return (
               <div key={role.name} >
                  < p > {role.name}</p>
               </div >
            )
         })}
      </div >
   )
}

export default RolesList;