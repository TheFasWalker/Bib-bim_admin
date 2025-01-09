import { ref, computed } from "vue"
import { SiteState } from "../store/SiteState"
import { sha512 } from "js-sha512"

const url = import.meta.env.VITE_API_DB_URL
export default function () {
    const siteState = SiteState()
    const makeAuth = async (login?: string, password?: string) => {
        if (password) {
            password = sha512(password)
        }
        siteState.loadingTrue()
        siteState.cleanTextError()

        return fetch(url + `/admin_auth?login=${login}&password=${password}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
        })
            .then(async (res) => {
                if (!res.ok) {
                    const errorMessage = await res.text
                    const errorText = `HTTP error! status: ${res.status}, message: ${errorMessage}`
                    siteState.errorText = errorText
                    throw new Error(errorText);
                }
                return res.json();
            })
            .catch((err) => {
                siteState.errorText = 'Ошибка авторизации';
                throw err;
              })
            .finally(() => {
                  siteState.loadingFalse()
              });
    }
    return {

        makeAuth
    }

}