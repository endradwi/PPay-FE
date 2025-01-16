import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../assets/icons/dashboard-menu.svg";
import transfer from "../assets/icons/tf-side.svg";
import history from "../assets/icons/history.svg";
import topUp from "../assets/icons/topup-side.svg";
import profile2 from "../assets/icons/profile-side.svg";
import quit from "../assets/icons/logout-side.svg";

const Sidebar = () => {
  return (
    <>
      <main className="hidden md:inline-block px-5 py-6 text-sm text-gray-600 bg-white border-r border-gray-200 border-solid w-[261px] flex-shrink-0 font-montserrat shadow-lg h-screen">
        <div className="inline-block w-full">
          <Link to="/dashboard">
            <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={dashboard} />
              <div className="ml-2">Dashboard</div>
            </button>
          </Link>
          <Link to="/transfer">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={transfer} />
              <div className="ml-2">Transfer</div>
            </button>
          </Link>
          <Link to="/historyTransaction">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={history} />
              <div className="ml-2">History</div>
            </button>
          </Link>
          <Link to="/top-up">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={topUp} />
              <div className="ml-2">Top Up</div>
            </button>
          </Link>
          <Link to="/profile">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={profile2} />
              <div className="ml-2">Profile</div>
            </button>
          </Link>
          <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md text-red-600 focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10">
            <img width="20" height="20" src={quit} />
            <div className="ml-2">Keluar</div>
          </button>
        </div>
      </main>
    </>
  );
};

export default Sidebar;
