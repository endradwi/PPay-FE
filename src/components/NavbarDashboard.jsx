import React, { useState } from "react";
import ppay from "../assets/icons/ppay_invert.svg";
import avatar from "../assets/images/avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

function NavbarDashboard(props) {
  const [isShow, setShow] = useState(false)
  return (
    <nav className="flex justify-between md:justify-between navbar border-solid shadow-md bg-primary md:bg-neutral px-5 md:px-7 py-4">
      <Link className="md:block hidden" to={"/"}>
        <img className="h-10 md:block hidden" src={ppay} alt="ppay" />
      </Link>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="hidden md:block">
          <span className="text-info">Ghaluh Wizard</span>
        </div>
        <div className="avatar online hidden md:block placeholder">
          <div className="w-8 md:w-12 aspect-square rounded-full">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        {isShow && 
          <div className="md:flex hidden absolute top-24 flex-col bg-white w-48">
            <div className="flex bg-primary text-white py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
              <div><AiOutlineUser /></div>
              <div>Profile</div>
            </div>
            <div className="flex text-warning py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
              <div><BiLogOut /></div>
              <div>Keluar</div>
            </div>
          </div>}
        {props.page === "dashboard" && (
          <>
            <div className="avatar md:hidden  online placeholder">
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
        <div className="text-2xl hidden md:block cursor-pointer" onClick={()=>setShow(!isShow)}>
          {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />} 
        </div>
      </div>
      <div className="block text-neutral text-2xl md:hidden" >
        <RxHamburgerMenu/>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
