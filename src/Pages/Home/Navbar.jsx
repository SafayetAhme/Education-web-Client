import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import UseAddtocart from "../../hooks/UseAddtocart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [addcart] = UseAddtocart();



    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allclass">All Class</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </> :
                <>
                    {/* can not see some */}
                </>
        }
        <li><NavLink to="/addtocart">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{addcart.length}</div>
        </NavLink></li>
    </>
    
    return (
        <div className=" container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="">
                        <div className="flex items-center gap-2">
                            <img className="w-12 h-12" src="https://i.ibb.co/PCPQyVp/Group-17.png" alt="" />
                            <h1 className="font-bold text-2xl text-blue-600">Educad</h1>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                {/*  */}
                {
                    user ? <>
                        <div className="dropdown dropdown-end pl-60">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/1R4PkXM/222.png" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><NavLink to="/userdash">User Dashboar</NavLink></li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                    </> :
                        <>
                            <li className="hover:bg-black bg-gray-200 text-black mr-3 p-2 px-6 rounded-xl hover:text-white"><NavLink to="/signin">Sign In</NavLink></li>
                            <li className="hover:bg-black bg-gray-200 text-black mr-3 p-2 px-6 rounded-xl hover:text-white"><NavLink to="/signup">Sign Up</NavLink></li>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;