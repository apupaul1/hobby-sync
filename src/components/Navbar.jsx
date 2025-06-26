import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import Swal from 'sweetalert2';
import { Sun, Moon } from 'lucide-react';


const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const email = user?.email;



    const location = useLocation();
    const currentPath = location.pathname;

    const [themeMode, setThemeMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const theme = themeMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [themeMode]);

    const handleToggle = (e) => {
        setThemeMode(e.target.checked);
    }

    const handleLogout = () => {

        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfully",
                    icon: "success",
                    heightAuto: false,
                    draggable: true
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn-ghost mr-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/groups'}>All Groups</NavLink></li>
                        {
                            user ? (<div>
                                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                {/* <li><NavLink to={'/myGroup'}>My Groups</NavLink></li> */}

                                <li><NavLink>My Profile</NavLink></li>
                                <li onClick={handleLogout} className=''><NavLink>Logout</NavLink></li>
                            </div>) : ('')
                        }
                    </ul>
                </div>
                <Link to={'/'}>
                    <div className='flex gap-1 items-center'>
                        <img
                            src="/logo.jpg"
                            alt="logo"
                            className="w-10 h-10 rounded-full" />
                        <h2 className=" text-2xl flex gap-0 text-blue-600 font-extrabold">Hobby<span className='text-orange-300 font-extrabold'>Sync</span></h2>
                    </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => (
                        isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : ''
                    )} to={'/'}>Home</NavLink></li>

                    <li><NavLink className={({ isActive }) => (
                        isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3 ' : ''
                    )} to={'/groups'}>All Groups</NavLink></li>

                    {
                        user ? (
                            <div className='flex items-center '>
                                <li>
                                    <NavLink
                                        className={({ isActive }) => (
                                            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : ''
                                        )} to={'/dashboard'}>Dashboard</NavLink></li>

                                {/* <li>
                                    <NavLink 
                                    className={({ isActive }) => (
                                    isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : ''
                                )} to={'/myGroups'}>My Groups</NavLink></li> */}

                            </div>

                        ) : ('')
                    }

                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <button
                    onClick={() => setThemeMode(!themeMode)}
                    className="text-xl p-2 rounded-full hover:bg-base-200 transition"
                    aria-label="Toggle Theme"
                >
                    {themeMode ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <div className="avatar hidden md:block">
                    {
                        user ? (<div className="relative group w-10 h-10">
                            <img
                                src={user?.photoURL || "https://i.pravatar.cc/150?img=12"}
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {user?.displayName || "User"}
                            </div>
                        </div>) : ''
                    }
                </div>
                {
                    user ? (
                        <div>
                            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                        </div>
                    ) : (
                        <div className='flex gap-4'>
                            {currentPath === '/signup' && (
                                <Link to="/signin" className="btn btn-primary hover:bg-slate-800">Login</Link>
                            )}
                            {currentPath === '/signin' && (
                                <Link to="/signup" className="btn btn-primary hover:bg-slate-800">Register</Link>
                            )}
                            {currentPath !== '/signin' && currentPath !== '/signup' && (
                                <>
                                    <Link to="/signin" className="btn btn-primary hover:bg-slate-800">Login</Link>
                                </>
                            )}
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;