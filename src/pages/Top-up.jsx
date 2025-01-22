// import { useState } from "react";
import Bri from "../assets/icons/bri.png";
import Dana from "../assets/icons/dana.png";
import Bca from "../assets/icons/bca.png";
import Gopay from "../assets/icons/gopay.png";
import Ovo from "../assets/icons/ovo.png";
import PinTopup from "../components/Pintopup";
import { MdOutlineVerified } from "react-icons/md";
import { PiUpload } from "react-icons/pi";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useAtom } from "jotai";
import avatarWhite from "../assets/images/avatar-white.svg";
import { API_URL } from "../config/api-config";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  tokenAtom,
  profileAtom,
  amountAtom,
  formTopupAtom,
  statusAtom,
} from "../jotai/data.js";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { use } from "react";

function Top_up() {
  const [token, setToken] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const navigate = useNavigate();
  const [amount, setAmount] = useAtom(amountAtom);
  const [amountTemp, setAmountTemp] = useState(0);
  const [topupFrom, setTopupForm] = useAtom(formTopupAtom);
  const [status, setStatus] = useAtom(statusAtom);
  const [alert, setAlert] = useState("hidden");
  const [val, setVal] = useState(false);

  const transferValidationSchema = yup.object({
    amount: yup.string().required("You must fill the amount"),
    payment_method_id: yup
      .string()
      .required("You must choose the payment method"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transferValidationSchema),
  });

  function formTopUp(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    setTopupForm(queryString);
    setAmount(value.amount);

    reset();
  }

  React.useEffect(() => {
    if (
      profile?.fullname === "" ||
      profile?.phone === null ||
      profile?.phone === ""
    ) {
      setVal(!val);
      //   navigate("/profile");
      //   return;
    }
    if (status !== 200) {
      setAlert("hidden");
      return;
    }
    if (status === 200) {
      setAlert("block");
    }
  }, [profile, status]);

  return (
    <div>
      <div className="w-full flex flex-col box-border h-fit-content">
        <NavbarDashboard page={"profile"} />
        <div className="flex box-border">
          <Sidebar page={"top-up"} side={"sidebar"} />
          <div className=" md:py-10 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
            <section className="px-9 py-4 flex flex-col gap-8">
              <div className="flex gap-3 items-center text-primary">
                <div>
                  <PiUpload className="w-6 h-6" />
                </div>
                <div className="text-secondary font-semibold text-base">
                  Top Up Account
                </div>
                <div
                  role="alert"
                  className={`alert alert-success w-2/3 text-neutral ${alert}`}
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
                  <span>Top up success, your balance is already updated!</span>
                </div>
              </div>
              <form onSubmit={handleSubmit(formTopUp)} className="flex gap-8">
                <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[792px] md:border-2 md:border-abuMuda">
                  <div className="flex flex-col gap-3">
                    <div className="text-secondary font-bold text-base">
                      Account Information
                    </div>
                    <div className="w-full h-[115px] flex flex-col py-3.5 px-5 bg-abuMuda">
                      <div className="flex items-center gap-2.5">
                        <div className="avatar">
                          <div className="w-20 h-20 rounded">
                            {profile?.image === null ? (
                              <img src={avatarWhite} alt="avatar" />
                            ) : (
                              <img
                                src={`${API_URL}/${profile?.image}`}
                                alt="avatar"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-secondary font-bold text-sm">
                            {profile?.fullname === ""
                              ? profile?.email
                              : profile?.fullname}
                          </div>
                          <div className="text-info text-sm">
                            {profile?.phone !== "" ? "" : profile?.phone}
                          </div>
                          <span className="w-24 h-6 bg-primary text-white rounded-md flex items-center gap-2 justify-center ">
                            <MdOutlineVerified /> Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                      <div className="text-secondary font-bold text-base">
                        Amount
                      </div>
                      <div className="text-info text-sm">
                        Type the amount you want to transfer to your e-wallet
                        account
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        {...register("amount")}
                        // onChange={() => setTotal()}
                        onChange={(e) => {
                          setAmountTemp(e.target.value);
                        }}
                        // name={name}
                        type="number"
                        placeholder="Type here"
                        className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-16"
                      />
                    </div>
                    {errors.amount?.message && (
                      <div className="text-error opacity-80">
                        {errors.amount?.message}{" "}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                      <div className="text-secondary font-bold text-base">
                        Payment Method
                      </div>
                      <div className="text-info text-sm">
                        Choose your payment method for top up account
                      </div>
                    </div>
                    {errors.payment_method_id?.message && (
                      <div className="text-error opacity-80">
                        {errors.payment_method_id?.message}{" "}
                      </div>
                    )}
                    <div className="flex flex-col gap-5">
                      <label
                        htmlFor="bri"
                        className="cursor-pointer flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda"
                      >
                        <input
                          type="radio"
                          id="bri"
                          {...register("payment_method_id")}
                          className=" radio radio-info"
                          value={1}
                        />
                        <img className="w-9" src={Bri} alt="" />
                        <label htmlFor="bri" className="text-info text-base">
                          Bank Rakyat Indonesia
                        </label>
                      </label>
                      <label
                        htmlFor="dana"
                        className="cursor-pointer flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda"
                      >
                        <input
                          type="radio"
                          id="dana"
                          {...register("payment_method_id")}
                          className=" radio radio-info"
                          value={2}
                        />
                        <img className="w-9" src={Dana} alt="" />
                        <label htmlFor="dana" className="text-info text-base">
                          Dana
                        </label>
                      </label>
                      <label
                        htmlFor="bca"
                        className="cursor-pointer flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda"
                      >
                        <input
                          type="radio"
                          id="bca"
                          {...register("payment_method_id")}
                          className="btn-primary radio radio-info"
                          value={3}
                        />
                        <img className="w-9" src={Bca} alt="" />
                        <label htmlFor="bca" className="text-info text-base">
                          Bank Central Asia
                        </label>
                      </label>
                      <label
                        htmlFor="gopay"
                        className="cursor-pointer flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda"
                      >
                        <input
                          type="radio"
                          id="gopay"
                          {...register("payment_method_id")}
                          className="btn-primary radio radio-info"
                          value={4}
                        />
                        <img className="w-9" src={Gopay} alt="" />
                        <label htmlFor="gopay" className="text-info text-base">
                          Gopay
                        </label>
                      </label>
                      <label
                        htmlFor="ovo"
                        className="cursor-pointer flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda"
                      >
                        <input
                          type="radio"
                          id="ovo"
                          {...register("payment_method_id")}
                          className="btn-primary radio radio-info"
                          value={5}
                        />
                        <img className="w-9" src={Ovo} alt="" />
                        <label htmlFor="ovo" className="text-info text-base">
                          Ovo
                        </label>
                      </label>
                    </div>
                  </div>
                  <div className="md:hidden flex flex-col gap-7">
                    <div className="text-secondary font-bold text-base">
                      Payment
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between">
                        <div className="text-info font-semibold text-base">
                          Amount
                        </div>
                        <div className="text-secendary font-semibold text-base">
                          Rp.{amountTemp}
                        </div>
                      </div>
                      {/* <div className="flex justify-between">
                        <div className="text-info font-semibold text-base">
                          Delivery
                        </div>
                        <div className="text-secendary font-semibold text-base">
                          Idr. 0
                        </div>
                      </div> */}
                      {/* <div className="flex justify-between">
                        <div className="text-info font-semibold text-base">
                          Tax
                        </div>
                        <div className="text-secendary font-semibold text-base">
                          Idr. 4000
                        </div>
                      </div> */}
                      <div className="w-full h-1 rounded-full bg-abuMuda"></div>
                      <div className="flex justify-between">
                        <div className="text-info font-semibold text-base">
                          Sub Total
                        </div>
                        <div className="text-secendary font-semibold text-base">
                          Rp.{amountTemp}
                        </div>
                      </div>
                      <button className="bg-[#2948FF] w-full h-11 text-white text-base rounded-md">
                        Submit
                      </button>
                      <div className="text-info text-base">
                        *Get Discount if you pay with Bank Central Asia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-4 px-7 py-4 w-[341px] h-[378px] border-2 border-abuMuda">
                  <div className="text-secondary font-bold text-base">
                    Payment
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                      <div className="text-info font-semibold text-base">
                        Amount
                      </div>
                      <div className="text-secendary font-semibold text-base">
                        Rp.{amountTemp}
                      </div>
                    </div>
                    {/* <div className="flex justify-between">
                      <div className="text-info font-semibold text-base">
                        Delivery
                      </div>
                      <div className="text-secendary font-semibold text-base">
                        Idr. 0
                      </div>
                    </div> */}
                    {/* <div className="flex justify-between">
                      <div className="text-info font-semibold text-base">
                        Tax
                      </div>
                      <div className="text-secendary font-semibold text-base">
                        Idr. 4000
                      </div>
                    </div> */}
                    <div className="w-full h-1 rounded-full bg-abuMuda"></div>
                    <div className="flex justify-between">
                      <div className="text-info font-semibold text-base">
                        Sub Total
                      </div>
                      <div className="text-secendary font-semibold text-base">
                        Rp.{amountTemp}
                      </div>
                    </div>
                    <button className="bg-[#2948FF] w-full h-11 text-white text-base rounded-md">
                      Submit
                    </button>
                    <div className="text-info text-base">
                      Get Discount if you pay with Bank Central Asia
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
          {val ? 
            <div role="alert" className="alert absolute w-[35rem]  left-96 ml-32 top-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Please enter your complete biodata first</span>
              <span className="btn btn-primary border border-info rounded-lg py-2 px-5  text-neutral"><Link to="/profile"><button>Profile</button></Link></span>
            </div> : amount > 0 && <PinTopup /> 
          }
          {/* {amount > 0 && <PinTopup />} */}
        </div>
      </div>
    </div>
  );
}

export default Top_up;
