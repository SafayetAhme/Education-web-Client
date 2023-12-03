import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../../hooks/UseAdmin";
import UseAuth from "../../hooks/UseAuth";


const AdminRoute = (children) => {
    const [user, loading] = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;