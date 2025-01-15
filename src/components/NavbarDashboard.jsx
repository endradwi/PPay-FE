import React from "react";
import ppay from "../assets/icons/ppay_invert.svg";
import avatar from "../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

function NavbarDashboard(props) {
  return (
    <nav className="flex justify-between navbar bg-primary md:bg-neutral px-5 md:px-12 lg:px-32 py-4">
      <img className="h-8 md:block hidden" src={ppay} alt="ppay" />
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="hidden md:block">
          <span className="text-info">Ghaluh Wizard</span>
        </div>
        {props.page === "dashboard" && (
          <>
            <div className="avatar online placeholder">
              <div className="w-8 md:w-12 aspect-square rounded-full">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="md:hidden flex flex-col">
              <div className="text-xs text-neutral">Hello,</div>
              <div className="text-md text-neutral">Ghaluh</div>
            </div>
          </>
        )}
        {props.page !== "dashboard" && (
          <>
            {" "}
            <div className="text-md md:hidden block text-neutral">
              {props.page}
            </div>
          </>
        )}
        <div className="text-2xl hidden md:block">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
