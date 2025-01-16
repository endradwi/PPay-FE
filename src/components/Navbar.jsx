import React from "react";
import ppay from "../assets/icons/ppay.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
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
        <div className="block text-neutral text-2xl md:hidden">
          <RxHamburgerMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
