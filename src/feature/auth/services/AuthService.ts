import { CONST_ACCESS_TOKEN, CONST_REFRESH_TOKEN, CONST_USER } from "../../../contants/defaultValues";
import type { LoginResponseInterface } from "../../../types/responseTypes"


export const AuthService = {
    login : ({ user , access , refresh} : LoginResponseInterface) => {
        if(!user || !access || !refresh) throw new Error("Invalid response data.");

        if(typeof window != 'undefined'){
            localStorage.setItem(CONST_USER,JSON.stringify(user));
            localStorage.setItem(CONST_ACCESS_TOKEN,access);
            localStorage.setItem(CONST_REFRESH_TOKEN,refresh)
        }
    },
    isAuthenticated : () : boolean => !!localStorage.getItem(CONST_ACCESS_TOKEN) && !!localStorage.getItem(CONST_REFRESH_TOKEN),

}