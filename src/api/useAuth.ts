import { sha512 } from "js-sha512"
import { apiFetch } from "../utils/api/apiFetch"

export default function () {
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