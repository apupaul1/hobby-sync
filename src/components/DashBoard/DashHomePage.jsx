import React from 'react';
import SideBar from './SideBar';
import MainPage from './MainPage';
import { Menu } from 'lucide-react';

const DashHomePage = () => {
  return (
    <div className="drawer lg:drawer-open bg-base-100 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100 lg:hidden border-b border-base-200 sticky top-0 z-50">
          <div className="flex-none">
            <label 
              htmlFor="dashboard-drawer" 
              aria-label="open sidebar" 
              className="btn btn-square btn-ghost"
            >
              <Menu size={24} className="text-base-content" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold text-lg text-primary">
            HobbySync
          </div>
        </div>
        <div className="p-4 md:p-6 overflow-y-auto min-h-screen">
          <MainPage />
        </div>
      </div> 
      
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        
        {/* Render your SideBar component here */}
        <SideBar />
      
      </div>
    </div>
  );
};

export default DashHomePage;