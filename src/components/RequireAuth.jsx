import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useGlobalAuth} from "../contexts";
import {Navbar} from "./index.js";

const RequireAuth = ({children}) => {
    let location = useLocation();
    const {loginToken} = useGlobalAuth()

    return (
        loginToken ? <>
            <Navbar/>
            {children}
        </> : <Navigate to={'/authentication/login'} state={{ from: location }}/>
    );
};

export default RequireAuth;