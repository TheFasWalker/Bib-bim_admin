import { UserRoles } from "../Types";

export default function checkAcessByRole(role: UserRoles): boolean {
    if (role == 'admin' || role =='manager' || role =='partner') {
        return true
    }
    return false
}