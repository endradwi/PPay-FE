import React from "react";
import image from "../assets/images/Pin_Image.svg";
import logo from "../assets/icons/ppay_logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function PinLogin() {
  return (
    <div>
      <div className="flex h-screen bg-primary">
        <div className="py-28 px-36 rounded-r-[100px] w-[800px] bg-neutral flex flex-col gap-5">
          <div className="items-center">
            <img src={logo} alt="" className="w-32 h-10" />
          </div>
          <div className="text-3xl font-medium">Enter Your Pin 👋</div>
          <div className="text-base">
          Please save your pin because this so important.          
          </div>
          <form className="w-full flex flex-col gap-28">
            <div className="flex gap-6">
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input border-b-info box-border pl-5"
                />
              </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input  border-b-info box-border pl-5"
                />
              </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
              </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
              </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input none border-b-info box-border pl-5"
                  />
              </label>
            <label htmlFor="" className="flex flex-col gap-1">
                <input
                  type="text"
                  className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
              </label>
                </div>
            <button className="btn btn-primary text-neutral">Login</button>
          </form>
          <div className="w-full flex justify-center">
          Forgot Your Pin? 
            <span className="text-primary">
              <Link to="/">Reset</Link>
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default PinLogin
