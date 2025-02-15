import { UserState } from './../store/UserState';
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import checkAcsessByRole from '../utils/checkAcessByRole'
export const guardMiddleware = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next:NavigationGuardNext
) => {
    const userState = UserState();
    const isAuth = !!userState.getUserToken
    const accessRoles = to.meta.accessRoles
    const requiredAuth = to.meta.requireAuth
    const publicRoute = to.meta.public

    if (publicRoute) return next()

    if (requiredAuth && !isAuth) return next({ name: 'error505' })

    if (accessRoles?.length) {
        const userRole = userState.getUserRole

        if (!userRole || !checkAcsessByRole(userRole, accessRoles)) {
            return next({name: 'error505'})
        }
    }
    next()

}

export const errorHandlerMiddleware = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    if (!to.matched.length) next({ name: 'error404' })
    else next()
}