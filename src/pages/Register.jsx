import React, { useState } from "react";
import image from "../assets/images/Register_Image.png";
import logo from "../assets/icons/ppay_logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const [isShow, setShow] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [status, setStatus] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const regisValidationSchema = yup.object({
    email: yup.string().required().min(8),
    password: yup.string().required().min(6),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords doesnt match."),
  });
  function formRegister(value) {
    const valJson = JSON.stringify(value);
    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: valJson,
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((v) => {
        setStatus(v.status);
        if (v.status === 500) {
          setMessage(v.message);
        }
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regisValidationSchema) });

  React.useEffect(() => {
    if (status === 201) {
      navigate("/login");
      return;
    }
  }, [status]);

  return (
    <>
      <div>
        <div className="inline-block md:flex h-full md:h-screen w-full bg-primary">
          <div className="md:py-12 py-20 px-5 md:px-56 rounded-none md:rounded-r-[100px] w-full md:w-[1000px] bg-neutral flex flex-col gap-2">
            <div className="items-center">
              <img src={logo} alt="" className="w-32 h-10" />
            </div>
            <div className="md:text-3xl text-lg font-medium">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </div>
            <div className="md:text-base text-xs">
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </div>
            <div className=" flex flex-row md:flex-col justify-between md:justify-center w-full items-center gap-3">
              <div className="btn border-primary rounded-full  h-10 border py-3.5 px-20 md:px-44 flex items-center">
                
                  <FcGoogle />
                  <span className="md:block hidden ">Sign In With Google</span>
              </div>
              <div className="btn border-primary rounded-full  h-10 border py-3.5 px-20 md:px-[10.5rem] flex items-center">
              
                  <FaFacebook className="text-blue-700" />
                  <span className="md:block hidden ">
                    Sign In With Facebook
                  </span>
      
              </div>
            </div>
            <div className="flex justify-between items-center gap-5 w-full">
              <div>
                <hr className="w-40 md:w-[250px] h-0.5 bg-info" />
              </div>
              <div className="text-info">or</div>
              <div>
                <hr className="w-40 md:w-[250px] h-0.5 bg-info" />
              </div>
            </div>
            {status === 500 && (
              <>
                <div role="alert" className="alert alert-error text-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-neutral">Email is not available</span>
                </div>
              </>
            )}
            <form
              onSubmit={handleSubmit(formRegister)}
              className="w-full flex flex-col gap-5"
            >
              <label htmlFor="" className="flex flex-col gap-1">
                <div>
                  <span className="text-base font-medium">Email</span>
                </div>
                <div className="input border-info w-full h-11 pl-5 flex items-center gap-3">
                  <MdOutlineMail className="text-info" />
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full box-border"
                    {...register("email")}
                  />
                </div>
                {errors.email?.message && (
                  <div className="text-error opacity-80">
                    {errors.email?.message}{" "}
                  </div>
                )}
              </label>
              <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-base font-medium">Password</span>
                <div className="w-full h-11 input border-info pl-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MdOutlineVpnKey className="text-info" />
                    {isShow ? (
                      <input
                        type="text"
                        placeholder="Enter Your Password"
                        className="w-full box-border"
                        {...register("password")}
                      />
                    ) : (
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full box-border"
                        {...register("password")}
                      />
                    )}
                  </div>
                  <div onClick={() => setShow(!isShow)}>
                    {isShow ? (
                      <IoEyeOutline className="text-info" />
                    ) : (
                      <IoEyeOffSharp className="text-info" />
                    )}
                  </div>
                </div>
                {errors.password?.message && (
                  <div className="text-error opacity-80">
                    {errors.password?.message}{" "}
                  </div>
                )}
              </label>
              <label htmlFor="" className="flex flex-col gap-1">
                <span className="text-base font-medium">Confirm Password</span>
                <div className="w-full h-11 input border-info pl-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MdOutlineVpnKey className="text-info" />
                    {isConfirm ? (
                      <input
                        type="text"
                        placeholder="Enter Your Password Again"
                        className="w-full box-border"
                      />
                    ) : (
                      <input
                        type="password"
                        placeholder="Enter Your Password Again"
                        className="w-full box-border"
                        {...register("confirm_password")}
                      />
                    )}
                  </div>
                  <div onClick={() => setConfirm(!isConfirm)}>
                    {isConfirm ? (
                      <IoEyeOutline className="text-info" />
                    ) : (
                      <IoEyeOffSharp className="text-info" />
                    )}
                  </div>
                </div>
                {errors.confirm_password?.message && (
                  <div className="text-error opacity-80">
                    {errors.confirm_password?.message}{" "}
                  </div>
                )}
              </label>
              <button className="btn btn-primary text-neutral">Register</button>
            </form>
            <div className="w-full flex justify-center">
              Have An Account?
              <span className="text-primary">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
          <div className="flex-1 md:flex justify-center items-center hidden">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
