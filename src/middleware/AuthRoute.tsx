import { createContext, useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthService } from "../feature/auth/services/AuthService";

export default function AuthRoute(){
    const [isAuthenticated , setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect( () => {
        setIsAuthenticated(AuthService.isAuthenticated)
    } , [location.pathname])

    if(isAuthenticated === null) return null;

    if(typeof window != "undefined"){
        // not working
        window.addEventListener('storage', () => {
            if(!AuthService.isAuthenticated){
                return  <Navigate to="/" replace />;
            }
        });
    }
    return isAuthenticated ? <Outlet/> : <Navigate to="/" replace />;
}