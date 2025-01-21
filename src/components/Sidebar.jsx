import React, { useState } from "react";
import { Link } from "react-router-dom";
import quit from "../assets/icons/logout-side.svg";
import { GrDashboard } from "react-icons/gr";
import { GrSend } from "react-icons/gr";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiUpload } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { tokenAtom, profileAtom } from "../jotai/data.js";
import { useAtom } from "jotai";

const Sidebar = (props) => {
  const [token, setToken] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [isShow, setShow] = useState(false);

  function logout() {
    setProfile({});
    setToken("");
  }

  return (
    <>
      {props.side === "sidebar" && (
        <main className="hidden md:inline-block px-5 py-6 text-sm text-gray-600 bg-white border-r border-gray-200 border-solid w-[261px] flex-shrink-0 font-montserrat shadow-lg">
          <div className="inline-block w-full">
            {props.page == "dashboard" ? (
              <Link to="/dashboard">
                <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <GrDashboard className="w-5 h-5" />
                  <div className="ml-2">Dashboard</div>
                </button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600 focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <GrDashboard className="w-5 h-5" />
                  <div className="ml-2">Dashboard</div>
                </button>
              </Link>
            )}
            {props.page == "transfer" ? (
              <Link to="/transfer">
                <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <GrSend className="w-5 h-5" />
                  <div className="ml-2">Transfer</div>
                </button>
              </Link>
            ) : (
              <Link to="/transfer">
                <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <GrSend className="w-5 h-5" />
                  <div className="ml-2">Transfer</div>
                </button>
              </Link>
            )}
            {props.page == "historyTransaction" ? (
              <Link to="/historyTransaction">
                <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <RxCounterClockwiseClock className="w-5 h-5" />
                  <div className="ml-2">History</div>
                </button>
              </Link>
            ) : (
              <Link to="/historyTransaction">
                <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <RxCounterClockwiseClock className="w-5 h-5" />
                  <div className="ml-2">History</div>
                </button>
              </Link>
            )}
            {props.page == "top-up" ? (
              <Link to="/top-up">
                <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <PiUpload className="w-5 h-5" />
                  <div className="ml-2">Top Up</div>
                </button>
              </Link>
            ) : (
              <Link to="/top-up">
                <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <PiUpload className="w-5 h-5" />
                  <div className="ml-2">Top Up</div>
                </button>
              </Link>
            )}
            {props.page == "profile" ? (
              <Link to="/profile">
                <button className="w-full h-10 items-center pl-2 flex rounded-md bg-primary text-white focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <LuUsers className="w-5 h-5" />
                  <div className="ml-2">Profile</div>
                </button>
              </Link>
            ) : (
              <Link to="/profile">
                <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                  <LuUsers className="w-5 h-5" />
                  <div className="ml-2">Profile</div>
                </button>
              </Link>
            )}

            <button
              onClick={() => setShow(!isShow)}
              className="w-full h-10 items-center mt-2 pl-2 flex rounded-md text-red-600 focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10"
            >
              <BiLogOut className="w-5 h-5 text-warning" />
              <div className="ml-2">Keluar</div>
            </button>
          </div>
        </main>
      )}
      {isShow && (
        <div className="w-96 h-96 top-[15rem] left-[50rem] absolute bg-white rounded-2xl flex flex-col justify-center items-center gap-5 shadow-xl">
          <div>
            <BsFillQuestionCircleFill className="w-32 h-32 text-primary" />
          </div>
          <div className="text-2xl font-extrabold">Are You Sure?</div>
          <div className="flex gap-10">
            <button onClick={() => logout()}>
              <div className="cursor-pointer btn border border-info py-3 px-10 hover:bg-primary hover:border-0 hover:text-neutral rounded-xl">
                Yes
              </div>
            </button>
            <div
              onClick={() => setShow(!isShow)}
              className="cursor-pointer btn bg-warning text-neutral border hover:text-black hover:border-warning py-3 px-10 rounded-xl"
            >
              No
            </div>
          </div>
        </div>
      )}
      {props.side !== "sidebar" && (
        <main className="flex md:hidden px-5 py-6 text-sm justify-between items-center text-gray-600 bg-white border-r border-gray-200 border-solid w-full flex-shrink-0 font-montserrat shadow-lg h-full">
          {props.page == "dashboard" ? (
            <Link to="/dashboard">
              <button className="w-full h-10 items-center pl-2 flex flex-col rounded-md text-primary focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <GrDashboard className="w-20 h-20" />
                <div className="ml-2">Dashboard</div>
              </button>
            </Link>
          ) : (
            <Link to="/dashboard">
              <button className="w-full h-10 items-center mt-2 pl-2 flex flex-col rounded-md focus:text-blue-600 focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <GrDashboard className="w-20 h-20" />
                <div className="ml-2">Dashboard</div>
              </button>
            </Link>
          )}
          {props.page == "transfer" ? (
            <Link to="/transfer">
              <button className="w-full h-10 items-center pl-2 flex flex-col  rounded-md text-primary focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <GrSend className="w-20 h-20" />
                <div className="ml-2">Transfer</div>
              </button>
            </Link>
          ) : (
            <Link to="/transfer">
              <button className="w-full h-10 items-center mt-2 pl-2 flex flex-col rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <GrSend className="w-20 h-20" />
                <div className="ml-2">Transfer</div>
              </button>
            </Link>
          )}
          {props.page == "historyTransaction" ? (
            <Link to="/historyTransaction">
              <button className="w-full h-10 items-center pl-2 flex flex-col rounded-md text-primary focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <RxCounterClockwiseClock className="w-20 h-20" />
                <div className="ml-2">History</div>
              </button>
            </Link>
          ) : (
            <Link to="/historyTransaction">
              <button className="w-full h-10 items-center mt-2 pl-2 flex flex-col rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <RxCounterClockwiseClock className="w-20 h-20" />
                <div className="ml-2">History</div>
              </button>
            </Link>
          )}
          {props.page == "top-up" ? (
            <Link to="/top-up">
              <button className="w-full h-10 items-center pl-2 flex flex-col rounded-md text-primary focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <PiUpload className="w-20 h-20" />
                <div className="ml-2">Top Up</div>
              </button>
            </Link>
          ) : (
            <Link to="/top-up">
              <button className="w-full h-10 items-center mt-2 pl-2 flex flex-col rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <PiUpload className="w-20 h-20" />
                <div className="ml-2">Top Up</div>
              </button>
            </Link>
          )}
          {props.page == "profile" ? (
            <Link to="/profile">
              <button className="w-full h-10 items-center pl-2 flex flex-col rounded-md text-primary focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <LuUsers className="w-20 h-20" />
                <div className="ml-2">Profile</div>
              </button>
            </Link>
          ) : (
            <Link to="/profile">
              <button className="w-full h-10 items-center mt-2 pl-2 flex flex-col rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
                <LuUsers className="w-20 h-20" />
                <div className="ml-2">Profile</div>
              </button>
            </Link>
          )}

          <button
            onClick={() => setShow(!isShow)}
            className="h-10 items-center mt-2 pl-2 flex flex-col rounded-md text-red-600 focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10"
          >
            <BiLogOut className="w-20 h-20 text-warning" />
            <div className="ml-2">Keluar</div>
          </button>
        </main>
      )}
    </>
  );
};

export default Sidebar;
