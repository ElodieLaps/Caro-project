import { createAllRoles } from "../../../lib/factories/role";
import Role from "../../../lib/models/Role";
import Title from "../../atoms/Title";

export type RolesProps = {
   title: string;
   roles: Array<Role>;
}

const RolesContent = ({ title, roles }: RolesProps) => {
   const rolesList = createAllRoles(roles);

   return (
      <div className="role">
         <Title classname="role__title" text={title} />
         {console.log(rolesList)}
      </div>
   )

}

export default RolesContent;