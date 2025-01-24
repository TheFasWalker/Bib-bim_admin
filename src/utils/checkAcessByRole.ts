import { UserRoles } from "../Types";

export default function checkAcsessByRole(role:UserRoles | null, acsessRoles: UserRoles[]): Boolean{

    if (!role) {
        return false
    }
    return acsessRoles.includes(role)

}