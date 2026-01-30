import React, { use, useState, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router'; // Assuming you use react-router for links

const Navbar = () => {
    // FIX: Added optional chaining safety in case context is null initially
    const context = use(AuthContext);
    const user = context?.user; 

    // Initialize state checking LocalStorage
    const [themeMode, setThemeMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const theme = themeMode ? "dark" : "light";
        const root = document.documentElement;

        // 1. Set DaisyUI Theme (Controls bg-base-100, text-primary, etc.)
        root.setAttribute("data-theme", theme);

        // 2. Set Tailwind Dark Class (Controls dark:bg-slate-900, etc.)
        // This fixes the issue where your manual dark classes weren't triggering
        if (themeMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [themeMode]);

    return (
        <div>
            {/* FIX: Ensure bg-base-100 is used for proper coloring */}
            <div className="navbar bg-base-100 shadow-sm transition-colors duration-300">
                <div className="flex-1">
                    <Link to="/dashboard" className="btn btn-ghost text-xl text-base-content">
                        Dashboard
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    
                    {/* Theme Toggle Button */}
                    <div>
                        <button
                            onClick={() => setThemeMode(!themeMode)}
                            className="text-xl p-2 rounded-full hover:bg-base-200 transition text-base-content"
                            aria-label="Toggle Theme"
                        >
                            {/* FIX: Ensure Icons render correctly based on state */}
                            {themeMode ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border border-base-300">
                                {/* FIX: Added Optional Chaining (?.) and Fallback Image */}
                                <img
                                    alt="User Avatar"
                                    src={user?.photoURL || "https://i.pravatar.cc/150?img=12"} 
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-base-200">
                            <li>
                                <a className="justify-between text-base-content">
                                    Profile
                                    <span className="badge badge-primary">New</span>
                                </a>
                            </li>
                            <li><a className="text-base-content">Settings</a></li>
                            <li><a className="text-base-content">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;