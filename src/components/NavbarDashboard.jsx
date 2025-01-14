import React from "react";
import ppay from "../assets/icons/ppay_invert.svg";
import avatar from "../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

function NavbarDashboard() {
  return (
    <nav className="flex justify-between navbar bg-neutral px-32 py-4">
      <img className="h-8" src={ppay} alt="ppay" />
      <div className="flex gap-6">
        <div>
          <span className="text-info">Ghaluh Wizard</span>
        </div>
        <div className="avatar online placeholder">
          <div className="w-12 h-12 rounded-full">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="text-2xl">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
