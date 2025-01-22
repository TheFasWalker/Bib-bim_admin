import { SiteState } from "../store/SiteState"
import { sha512 } from "js-sha512"
import { apiFetch } from "../utils/api/apiFetch"

const url = import.meta.env.VITE_API_DB_URL
export default function () {
    const siteState = SiteState()
    const makeAuth = async (login?: string, password?: string) => {
        if (password) {
            password = sha512(password)
        }
        return apiFetch(`/admin_auth?login=${login}&password=${password}`,{
            method:'GET'
        })
    }
    return {
        makeAuth
    }

}