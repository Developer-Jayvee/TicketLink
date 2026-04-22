import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthService } from "../feature/auth/services/AuthService";

interface IndexRoute {
    index : string;
}
export default function GuestRoute({
    index
} : IndexRoute){
    const [isAuthenticated , setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect( () => {
        setIsAuthenticated(AuthService.isAuthenticated)
    } , [location.pathname])

    if(isAuthenticated === null) return null;

  
    return !isAuthenticated ? <Outlet/> : <Navigate to={index} replace />;
}