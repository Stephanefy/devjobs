import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


type Props = {
    allowedRoles: string[]
}


const Auth = ({ allowedRoles }: Props) => {

    const { state } = useContext(AuthContext);
    

    const location = useLocation();



    return (
        
            allowedRoles.includes(state!.user!.role) ? (
                <Outlet/>
            ) :  state!.user!.email ? (
                <Navigate to="/not-authorized" replace={true} />
            ) : (
                <Navigate to="/login" replace={true} state={{ from: location }} />
            )
        
    )
}

export default Auth