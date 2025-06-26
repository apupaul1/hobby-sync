import React, { use } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, NavLink } from 'react-router';
import MyGroup from '../MyGroup';

const MainPage = () => {
    const { user } = use(AuthContext);

    return (
        <div className="w-full min-h-screen bg-gray-50 ">
            {/* Navbar */}
            <div >
                <Navbar />
            </div>

            {/* Welcome Message */}
            <div className="text-center my-8">
                <h1 className="text-2xl font-semibold text-slate-700">
                    Welcome, {user?.displayName || 'User'} 👋
                </h1>
                <p className="text-gray-500 text-sm mt-1 ">Manage your hobby groups and explore features.</p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-10 mb-10">
                {/* Create Group Card */}
                <div className="card bg-yellow-100 shadow-md hover:shadow-lg transition">
                    <div className="card-body">
                        <h2 className="card-title text-slate-800">Create a New Group</h2>
                        <p className="text-sm text-slate-700">
                            Organize your own hobby group by setting topics, schedules, and members.
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={'/createGroup'}> <button className="btn btn-warning">Create Group</button></Link>
                        </div>
                    </div>
                </div>

                {/* My Groups Card */}
                <div className="card bg-slate-200 shadow-md hover:shadow-lg transition">
                    <div className="card-body">
                        <h2 className="card-title text-slate-800">Your Groups</h2>
                        <p className="text-sm text-slate-700">
                            View and manage all the hobby groups you’re part of.
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={'/myGroups'}><button className="btn btn-info">View Groups</button></Link>
                        </div>
                    </div>
                </div>

                {/* Explore Groups Card */}
                <div className="card bg-orange-100 shadow-md hover:shadow-lg transition">
                    <div className="card-body">
                        <h2 className="card-title text-slate-800">Explore Groups</h2>
                        <p className="text-sm text-slate-700">
                            Discover active hobby groups around your interests and location.
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={'/groups'}><button className="btn btn-success">Browse Groups</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* My Profile Overview */}
            <div className="w-11/12 mx-auto bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">👤 My Profile Overview</h2>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img
                        src={user?.photoURL || "https://i.pravatar.cc/100"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
                    />
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-slate-700">
                            {user?.displayName || "Anonymous User"}
                        </h3>
                        <p className="text-sm text-gray-500">{user?.email || "No email available"}</p>
                    </div>
                </div>

            </div>
                <div className="w-11/12 mx-auto bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200">
                    <MyGroup></MyGroup>
                </div>

        </div>
    );
};


export default MainPage;