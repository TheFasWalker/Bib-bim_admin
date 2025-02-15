import { RouteRecordRaw } from "vue-router";
import { UserRoles } from "../Types";

export type RouteMeta = {
    requireAuth?: boolean
    accessRoles?: UserRoles[]
    public?: boolean
}

export type CustomRouteRecordRaw = RouteRecordRaw & {
    meta?: RouteMeta
    children?: CustomRouteRecordRaw[]
}