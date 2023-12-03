/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const Privateroute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <div className="text-center m-16">
            <span className="loading loading-infinity loading-lg"></span>
            <h1 className="text-2xl text-yellow-600">dont have any items</h1>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default Privateroute;