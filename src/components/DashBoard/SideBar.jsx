import React, { use } from 'react';
import { NavLink } from 'react-router';
import {
    Home,
    PlusCircle,
    User,
    Settings,
    LogOut,
    HelpCircle
} from 'lucide-react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SideBar = () => {
    const { user, logOut } = use(AuthContext);

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
                console.error(error);
            });
    };

    return (
        <aside className="bg-slate-900 text-white min-h-screen w-64 px-6 py-8 transition-all duration-300">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-10">
                <img src="/logo.jpg" alt="HobbySync Logo" className="w-10 h-10 rounded-full" />
                <h2 className="text-2xl font-extrabold text-blue-600">
                    Hobby<span className="text-orange-300">Sync</span>
                </h2>
            </div>

            {/* User Greeting */}
            <div className="mb-10">
                <p className="text-sm text-gray-400">Welcome back,</p>
                <h3 className="text-lg font-semibold">{user?.displayName || 'User'}</h3>
            </div>

<hr className="my-8 border-slate-700" />
            {/* Navigation Links */}
            <nav className="space-y-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'hover:bg-slate-800 text-gray-300'
                        }`
                    }
                >
                    <Home size={18} /> Home
                </NavLink>

                <NavLink
                    to="/createGroup"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'hover:bg-slate-800 text-gray-300'
                        }`
                    }
                >
                    <PlusCircle size={18} /> Create Group
                </NavLink>

                <NavLink
                    to="/myGroups"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'hover:bg-slate-800 text-gray-300'
                        }`
                    }
                >
                    <User size={18} /> Your Profile
                </NavLink>
            </nav>

            <hr className="my-8 border-slate-700" />

            {/* Utility Actions */}
            <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                    <HelpCircle size={18} />
                    Support
                </div>
                <div className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                    <Settings size={18} />
                    Settings
                </div>
                <div
                    onClick={handleLogout}
                    className="flex items-center gap-3 hover:text-red-400 transition cursor-pointer"
                >
                    <LogOut size={18} />
                    Logout
                </div>
            </div>
        </aside>
    );
};


export default SideBar;
