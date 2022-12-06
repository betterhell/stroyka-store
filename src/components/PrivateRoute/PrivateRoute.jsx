import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import useAuthStatus from "../../hooks/useAuthStatus";
import {BiLoaderAlt} from "react-icons/bi"

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if (checkingStatus) {
        return <BiLoaderAlt size={45} className="animate-spin"/>
    }

    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
};

export default PrivateRoute;