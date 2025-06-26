import React, { use, useState, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Sun, Moon } from 'lucide-react';


const Navbar = () => {
    const { user } = use(AuthContext)

    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        const theme = themeMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [themeMode]);

    console.log(user);
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dashboard</a>
                </div>
                <div className="flex gap-4">
                    <div>
                        <button
                            onClick={() => setThemeMode(!themeMode)}
                            className="text-xl p-2 rounded-full hover:bg-base-200 transition"
                            aria-label="Toggle Theme"
                        >
                            {themeMode ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                    </div>
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;