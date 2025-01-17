import React, { useState } from "react";
import ppay from "../assets/icons/ppay.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";

function Navbar() {
  const [isShow, setShow] = useState(false)
  return (
    <>
      <nav className="flex drawer drawer-end justify-between navbar bg-primary px-5 md:px-12 lg:px-32 py-4 shadow-md">
        <img className="h-8" src={ppay} alt="ppay" />
        <div className="md:flex gap-6 hidden">
          <Link to="/login"><button className="btn text-neutral bg-primary border border-neutral text-sm font-normal">
            Sign In
          </button></Link>
          <Link to="/register"><button className="btn bg-neutral border-none text-primary text-sm font-normal">
            Sign Up
          </button></Link>
        </div>
        <div className="block text-neutral text-2xl md:hidden cursor-pointer" onClick={()=>setShow(!isShow)}>
          {isShow ?<AiOutlineAlignRight />:<RxHamburgerMenu />}
        </div>
      </nav>
      {isShow && 
      <div className="bg-white shadow-lg rounded-b-3xl absolute w-full top-16 flex flex-col justify-center md:hidden items-center px-5 py-5 flex-shrink-0 gap-2">
        <div className="btn btn-primary rounded-xl bg-abuMuda py-3 px-32 w-full h-20">Sign In</div>
        <div className="btn btn-primary rounded-xl bg-whitepy-3 px-32 w-full h-20">Sign Up</div>
      </div>
      }
    </>
  );
}

export default Navbar;
