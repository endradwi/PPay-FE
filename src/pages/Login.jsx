import React, { useState } from "react";
import image from "../assets/images/Login_Image.svg";
import logo from "../assets/icons/ppay_logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

function Login() {
  const [isShow, setShow] = useState(false)
  return (
    <div>
      <div className="md:flex block h-screen bg-primary">
        <div className="md:py-28 md:px-36 px-5 py-40 rounded-none md:rounded-r-[100px] w-full h-full md:w-[1000px] bg-neutral flex flex-col gap-2">
          <div className="items-center">
            <img src={logo} alt="" className="w-32 h-10" />
          </div>
          <div className="text-3xl font-medium">Hello Welcome Back 👋</div>
          <div className="text-base">
            Fill out the form correctly or you can login with several option.
          </div>
          <div className="w-full flex flex-row md:flex-col justify-center items-center gap-3">
            <div className="btn border-abuMuda rounded-full w-[360px] md:w-full h-10 border flex justify-between md:justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info"><FcGoogle /><span className="md:block hidden ">Sign In With Google</span></button>
            </div>
            <div className="btn border-abuMuda rounded-full w-[360px] md:w-full h-10 border flex justify-between md:justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info"><FaFacebook className="text-blue-700"/><span className="md:block hidden ">Sign In With Facebook</span></button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <hr className="w-[200px] h-0.5 bg-info" />
            </div>
            <div className="text-info">or</div>
            <div>
              <hr className="w-[200px] h-0.5 bg-info" />
            </div>
          </div>
          <form className="w-full flex flex-col gap-2">
          <label htmlFor="" className="flex flex-col gap-1">
              <div>
                <span className="text-base font-medium">Email</span>
              </div>
              <div className="input border-info w-full h-11 pl-5 flex items-center gap-3">
              <MdOutlineMail className="text-info"/>
                <input type="text" placeholder="Enter Your Email" className="w-full box-border"/>
              </div>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
              <span className="text-base font-medium">Password</span>
              <div className="w-full h-11 input border-info pl-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
              <MdOutlineVpnKey className="text-info"/>
                {isShow ? <input type="text" placeholder="Enter Your Password" className="w-full box-border"/>  :  <input type="password" placeholder="Enter Your Password" className="w-full box-border"/> }
              </div>
                <div onClick={()=>setShow(!isShow)}>
                {isShow ? <IoEyeOutline className="text-info" /> : <IoEyeOffSharp className="text-info" />} 
                </div>
              </div>
            </label>
            <Link to="/forgotPass"><div className="w-full flex justify-end">
              <span className="link link-primary">Forgot Password?</span>
            </div></Link>
            <button className="btn btn-primary text-neutral">Login</button>
          </form>
          <div className="w-full flex justify-center gap-2">
            Not Have An Account?
            <span className="link link-primary">
              <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
        <div className="flex-1 md:flex justify-center items-center hidden">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Login;
