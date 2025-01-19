import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import NavbarDashboard from "../components/NavbarDashboard";
// import Sidebar from '../components/Sidebar'
import { BiKey } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { tokenAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//PR ALERT PASSWORD SUCCESS DAN ALERT VALIDATION

function ChangePass() {
  const [token, setToken] = useAtom(tokenAtom);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [showWarn, setShowWarn] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  const passValidationSchema = yup.object({
    exist_password: yup.string().required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords doesnt match."),
  });
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(passValidationSchema),
  });

  function formPassword(value) {
    console.log(value);
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    fetch(`${API_URL}/change-password`, {
      method: "POST",
      body: queryString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((v) => {
        console.log(v.status);
        if (v.status === 400) {
          setStatus(v.status);
          setMessage("Invalid password");
          return;
        } else {
          fetch(`${API_URL}/users/:id`, {
            method: "PATCH",
            body: queryString,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((v) => {
              if (v === 200) {
                setStatus(v.status);
                setMessage("Password changed success");
                return;
              }
            });
        }
      });
  }

  React.useEffect(() => {
    if (status === 200) {
      setShowSuccess("block");
      setShowWarn("hidden");
    }
    if (status === 400) {
      setShowSuccess("hidden");
      setShowWarn("block");
    }
  }, [status, showSuccess, showWarn]);
  return (
    <div className="flex flex-col gap-8">
      <NavbarDashboard />
      <div className="flex">
        {/* <Sidebar/> */}
        <section className="px-9 py-4 flex flex-col gap-8">
          <div className="flex gap-2 text-secondary font-bold text-base">
            <CgProfile className="text-[#2948FF] w-4 h-4" /> Profile
          </div>
          <div className="flex gap-8">
            <form
              onSubmit={handleSubmit(formPassword)}
              className=" py-4 md:px-9 md:py-4 flex flex-col gap-4 w-full h-[450px] md:border-2 md:border-abuMuda"
            >
              <div className="text-secondary font-semibold text-base">
                Change Password
              </div>
              {status === 200 && (
                <>
                  <div
                    role="alert"
                    className={`${showSuccess} alert alert-success text-neutral`}
                  >
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-neutral">{message}</span>
                  </div>
                </>
              )}
              {status === 400 && (
                <>
                  <div
                    role="alert"
                    className={`${showWarn} alert alert-error text-neutral`}
                  >
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="existing-password"
                    className="text-secondary font-semibold text-base"
                  >
                    Existing Password
                  </label>
                </div>
                <div className="flex">
                  <div className="">
                    <BiKey className=" ml-5 mt-3 absolute w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="existing-password"
                    {...register("exist_password")}
                    className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                  />
                  {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="new-password"
                    className="text-secondary font-semibold text-base"
                  >
                    New Password
                  </label>
                </div>
                <div className="flex">
                  <div className="">
                    <BiKey className=" ml-5 mt-3 absolute w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="new-password"
                    {...register("password")}
                    className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                  />
                  {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="confirm-password"
                    className="text-secondary font-semibold text-base"
                  >
                    Confirm New Password
                  </label>
                </div>
                <div className="flex">
                  <div className="">
                    <BiKey className=" ml-5 mt-3 absolute w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="confirm-password"
                    {...register("confirm_password")}
                    className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                  />
                  {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                </div>
              </div>
              <div>
                <button className="bg-[#2948FF] w-full h-11 text-white rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChangePass;
