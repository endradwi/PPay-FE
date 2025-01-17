import React from "react";

import ppay from "../assets/icons/ppay.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex navbar justify-between bg-primary px-5 md:px-12 lg:px-32 py-4 shadow-md">
        <img className="h-8" src={ppay} alt="ppay" />
        <div className="md:flex gap-6 hidden">
          <Link
            to={"/login"}
            className="btn text-neutral bg-primary border border-neutral text-sm font-normal"
          >
            Sign In
          </Link>
          <Link
            to={"/register"}
            className="btn bg-neutral border-none text-primary text-sm font-normal"
          >
            Sign Up
          </Link>
        </div>
        <div className="text-neutral md:hidden block text-2xl">
          <RxHamburgerMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
