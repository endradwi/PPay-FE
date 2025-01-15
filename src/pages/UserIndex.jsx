import { Outlet, useLocation } from "react-router-dom";
import React from 'react'

const UserIndex = () => {

const location = useLocation();
  return (
    <div className="h-screen w-full flex flex-col">
    <UserNavbar />
    <div className="md:flex">
      <SideNavbar />
      {location.pathname === "/user" ? <Profile /> : <Outlet />}
    </div>
  </div>
  )
}

export default UserIndex