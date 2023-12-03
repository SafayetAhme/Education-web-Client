import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../hooks/UseAdmin";


const Dashboard = () => {

    const [isAdmin] = UseAdmin();
    console.log(isAdmin)

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-600">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/dashboard/adminhome">Admin Home</NavLink></li>
                            <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/dashboard/additems">Add Items</NavLink></li>
                            <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/dashboard/paymenthhistory">Payment History</NavLink></li>
                            <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/dashboard/manageitems">manage Items</NavLink></li>
                            <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                        </> :
                            <>
                                {/*  */}
                            </>
                    }
                    <div className="py-4 pb-6">
                        <hr />
                    </div>
                    <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/">Home</NavLink></li>
                    <li className="bg-blue-500 rounded-md mb-2 hover:bg-white font-medium text-white hover:text-black"><NavLink to="/allclass">All Class</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;