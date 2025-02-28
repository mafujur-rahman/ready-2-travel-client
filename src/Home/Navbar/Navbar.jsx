import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100 mt-10 mx-auto container animate__animated animate__bounceInDown">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#113065" : "",
                                    color: isActive ? "#ffff" : "#020617",
                                    padding: isActive ? "5px" : "",
                                    borderRadius: isActive ? "8px" : ""
                                };
                            }}
                        >
                            <li><a>Home</a></li>
                        </NavLink>
                        <NavLink to="/all-tourist-spot"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#113065" : "",
                                    color: isActive ? "#ffff" : "#020617",
                                    padding: isActive ? "5px" : "",
                                    borderRadius: isActive ? "8px" : ""
                                };
                            }}
                        ><li><a>All Tourists Spot</a></li></NavLink>
                        <NavLink to="/add-tourist-spot"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#113065" : "",
                                    color: isActive ? "#ffff" : "#020617",
                                    padding: isActive ? "5px" : "",
                                    borderRadius: isActive ? "8px" : ""
                                };
                            }}
                        ><li><a> Add Tourists Spot</a></li></NavLink>
                        <NavLink to="/list-page"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#113065" : "",
                                    color: isActive ? "#ffff" : "#020617",
                                    padding: isActive ? "5px" : "",
                                    borderRadius: isActive ? "8px" : ""
                                };
                            }}
                        ><li><a> My List</a></li></NavLink>

                    </ul>
                </div>
                <h1 className="text-2xl font-bold md:text-4xl md:font-extrabold text-[#113065]">Ready to Travel</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#113065" : "",
                                color: isActive ? "#ffff" : "#020617",
                                padding: isActive ? "5px" : "",
                                borderRadius: isActive ? "8px" : ""
                            };
                        }}
                    >
                        <li><a>Home</a></li>
                    </NavLink>
                    <NavLink to="/all-tourist-spot"
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#113065" : "",
                                color: isActive ? "#ffff" : "#020617",
                                padding: isActive ? "5px" : "",
                                borderRadius: isActive ? "8px" : ""
                            };
                        }}
                    ><li><a>All Tourists Spot</a></li></NavLink>
                    <NavLink to="/add-tourist-spot"
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#113065" : "",
                                color: isActive ? "#ffff" : "#020617",
                                padding: isActive ? "5px" : "",
                                borderRadius: isActive ? "8px" : ""
                            };
                        }}
                    ><li><a> Add Tourists Spot</a></li></NavLink>
                    <NavLink to="/list-page"
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#113065" : "",
                                color: isActive ? "#ffff" : "#020617",
                                padding: isActive ? "5px" : "",
                                borderRadius: isActive ? "8px" : ""
                            };
                        }}
                    ><li><a> My List</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <a
                                data-tooltip-id="my-tooltip-inline"
                                data-tooltip-content={user.displayName}
                            >
                              <div className="avatar online mr-5">
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL}  />
                                </div>
                            </div>
                            </a>
                            <Tooltip
                                id="my-tooltip-inline"
                                style={{ backgroundColor: "#113065", color: "#fff" }}
                            />
                            
                            <a onClick={handleSignOut} className="btn bg-[#113065] text-white">Log Out</a>
                        </>

                        :
                        <>
                            <Link to="/log-in"><a className="btn bg-[#113065] text-white">Log in</a></Link>
                            <Link to="/register"><a className="btn bg-[#113065] text-white">Register</a></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;