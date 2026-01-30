import React, { use } from 'react';
import { NavLink } from 'react-router';
import {
    Home,
    PlusCircle,
    User,
    LogOut,
    X, // Added Close icon for mobile UX
} from 'lucide-react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

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
        <aside className="bg-base-200 text-base-content min-h-screen w-64 px-6 py-8 transition-colors duration-300 border-r border-base-300 flex flex-col">
            
            {/* Header with Logo & Mobile Close Button */}
            <div className="flex items-center justify-between mb-10 relative">
                <Link to={'/'} className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="HobbySync Logo" className="w-10 h-10 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-primary">
                        Hobby<span className="text-orange-400">Sync</span>
                    </h2>
                </Link>
                <label 
                    htmlFor="dashboard-drawer" 
                    className="btn btn-circle btn-ghost absolute -top-6 -right-6 btn-sm lg:hidden"
                >
                    <X size={20} />
                </label>
            </div>

            <div className="mb-10">
                <p className="text-sm text-base-content/60">Welcome back,</p>
                <h3 className="text-lg font-semibold truncate">{user?.displayName || 'User'}</h3>
            </div>

            <hr className="my-8 border-base-content/10" />

            {/* Navigation Links */}
            <nav className="space-y-2 flex-grow">                
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-primary text-primary-content font-semibold shadow-md'
                            : 'hover:bg-base-300 text-base-content/70 hover:text-base-content'
                        }`
                    }
                >
                    <Home size={18} /> Home
                </NavLink>

                <NavLink
                    to="/createGroup"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-primary text-primary-content font-semibold shadow-md'
                            : 'hover:bg-base-300 text-base-content/70 hover:text-base-content'
                        }`
                    }
                >
                    <PlusCircle size={18} /> Create Group
                </NavLink>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${isActive
                            ? 'bg-primary text-primary-content font-semibold shadow-md'
                            : 'hover:bg-base-300 text-base-content/70 hover:text-base-content'
                        }`
                    }
                >
                    <User size={18} /> Your Profile
                </NavLink>
            </nav>

            <hr className="my-8 border-base-content/10" />

            {/* Utility Actions */}
            <div className="space-y-3 text-base-content/60 text-sm mt-auto">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 hover:text-error transition cursor-pointer p-2 rounded-md hover:bg-base-300"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default SideBar;