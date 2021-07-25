import { createRolesList } from "../../../lib/factories/role";
import Role from "../../../lib/models/Role";
import Title from "../../atoms/Title";
import RolesList from "../../organisms/RolesList";

export type RolesProps = {
   title: string;
   roles: Array<Role>;
}

const RolesContent = ({ title, roles }: RolesProps) => {
   const rolesList = createRolesList(roles);

   return (
      <div className="role">
         <Title classname="role__title" text={title} />
         <RolesList rolesList={rolesList} />
      </div>
   )

}

export default RolesContent;