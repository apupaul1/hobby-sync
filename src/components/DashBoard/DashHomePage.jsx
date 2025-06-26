import React from 'react';
import SideBar from './SideBar';
import MainPage from './MainPage';

const DashHomePage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-8 ">
      {/* Sidebar */}
      <div className="md:col-span-2 bg-slate-900 text-white">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <SideBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-6 bg-gray-50 px-4 py-6 overflow-y-auto min-h-screen">
        <MainPage />
      </div>
    </div>
  );
};


export default DashHomePage;