import {Navigate, Outlet} from "react-router-dom";
import {useGlobalAuth} from "../contexts";
import {Navbar} from "./index.js";

const RequireAuth = () => {
    const {loginToken} = useGlobalAuth()
    return (
        loginToken ? <>
            <Navbar/>
            <Outlet/>
        </> : <Navigate to={'/authentication/login'}/>
    );
};

export default RequireAuth;