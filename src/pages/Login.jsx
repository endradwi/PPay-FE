import React, { useState } from "react";
import image from "../assets/images/Login_Image.svg";
import logo from "../assets/icons/ppay_logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useAtom } from "jotai";
import { tokenAtom } from "../jotai/data.js";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const [isShow, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [valid, setValid] = useState(false);
  const [token, setToken] = useAtom(tokenAtom);
  const [message, setMessage] = useState("");
  // const [statusPin, setStatusPin] = useState(0);
  const navigate = useNavigate();

  const loginValidationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  function formSubmit(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: queryString,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((v) => {
        setStatus(v.status);
        if (v.status === 400) {
          setMessage(v.message);
          return;
        }
        if (v.status === 200){
          setTimeout(() => {
            setMessage(v.message)
            navigate("/pin-login");
          }, 1000);
        }
        setToken(v.data.token);
          setValid(!valid)
        // fetch(`${API_URL}/auth/pin`)
        //   .then((response) => response.json())
        //   .then((v) => {
          //     setStatusPin(v.status);
        //     console.log(v.status);
        //     if (v.status === 200) {
        //       navigate("/");
        //       return;
        //     }
        //     if (v.status === 404) {
        //       navigate("/Login-pin");
        //       return;
        //     }
        //   });
      });
    }

  React.useEffect(() => {
    // if (statusPin === 404) {
    //   navigate("/Login-pin");
    //   return;
    // }
    // if (statusPin === 200) {
    //   navigate("/");
    //   return;
    // }
    if (token !== undefined && token !== "") {
      navigate("/");
      return;
    }
  }, [token, status]);
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
            <div className="btn border-abuMuda rounded-full w-1/3 md:w-full h-10 border flex justify-between md:justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info">
                <FcGoogle />
                <span className="md:block hidden ">Sign In With Google</span>
              </button>
            </div>
            <div className="btn border-abuMuda rounded-full w-1/3 md:w-full h-10 border flex justify-between md:justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info">
                <FaFacebook className="text-blue-700" />
                <span className="md:block hidden ">Sign In With Facebook</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="w-full">
              <hr className="md:w-full h-0.5 bg-info" />
            </div>
            <div className="text-info">or</div>
            <div className="w-full">
              <hr className="md:w-full h-0.5 bg-info" />
            </div>
          </div>
          {valid && (
            <>
              <div role="alert" className="alert alert-success text-neutral">
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
                <span className="text-neutral">Login Success</span>
              </div>
            </>
          )}
          {status === 400 && (
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
                <span className="text-neutral">{message}</span>
              </div>
            </>
          )}
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="w-full flex flex-col gap-2"
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
            <Link to="/forgotPass">
              <div className="w-full flex justify-end">
                <span className="link link-primary">Forgot Password?</span>
              </div>
            </Link>
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
