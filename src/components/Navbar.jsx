import React, { useState } from "react";
import ppay from "../assets/icons/ppay.svg";
import avatar from "../assets/images/avatar.svg";
import avatarWhite from "../assets/images/avatar-white.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { tokenAtom, profileAtom } from "../jotai/data.js";
import { API_URL } from "../config/api-config";
import { useAtom } from "jotai";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const [token, setToken] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [isShow, setShow] = useState(false);
  const [isShowLog, setShowLog] = useState(false);

  console.log(token);

  function logout() {
    setProfile({});
    setToken("");
  }

  async function getProfile(tokenProfile) {
    const data = await (
      await fetch(`${API_URL}/users/:id`, {
        headers: {
          Authorization: `Bearer ${tokenProfile}`,
        },
      })
    ).json();
    setProfile({ ...profile, ...data.data });
  }

  React.useEffect(() => {
    if (token === undefined) {
      setToken("");
      return;
    }
    if (token === "") {
      setProfile({});
    }
    if (token !== "") {
      getProfile(token);
    }
  }, [token]);
  return (
    <>
      <nav className="flex navbar justify-between bg-primary px-5 md:px-12 lg:px-32 py-4 shadow-md">
        <img className="h-8" src={ppay} alt="ppay" />
        {token === "" && (
          <div className="md:flex gap-6 hidden">
            <Link to="/login">
              <button className="btn text-neutral bg-primary border border-neutral text-sm font-normal">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn bg-neutral border-none text-primary text-sm font-normal">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {token !== "" && (
          <div className="md:flex gap-6 hidden">
            <div className="hidden md:block">
              <span className="text-neutral">
                {profile?.fullname === "" ? profile?.email : profile?.fullname}
              </span>
            </div>
            <div className="hidden md:block avatar placeholder">
              <div className="w-8 md:w-12 flex justify-center items-center aspect-square bg-neutral text-sm text-neutral rounded-full">
                {profile?.image === null ? (
                  <img src={avatar} alt="avatar" />
                ) : (
                  <img src={avatar} alt="avatar" />
                )}
              </div>
            </div>
            {isShowLog && (
              <div className="md:flex hidden absolute top-24 flex-col bg-white w-48">
                <div className="flex bg-primary text-white py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
                  <div>
                    <AiOutlineUser />
                  </div>
                  <div>Profile</div>
                </div>
                <div className="flex text-warning py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
                  <div>
                    <BiLogOut />
                  </div>
                  <button onClick={() => logout()}>Log Out</button>
                </div>
              </div>
            )}
            <div
              className="text-2xl hidden md:block text-neutral cursor-pointer"
              onClick={() => setShowLog(!isShowLog)}
            >
              {isShowLog ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
        )}
        <div
          className="block text-neutral text-2xl md:hidden cursor-pointer"
          onClick={() => setShow(!isShow)}
        >
          {isShow ? <AiOutlineAlignRight /> : <RxHamburgerMenu />}
        </div>
      </nav>
      {isShow && token === "" && (
        <div className="bg-white shadow-lg rounded-b-3xl absolute w-full top-16 flex flex-col justify-center md:hidden items-center px-5 py-5 flex-shrink-0 gap-2">
          <div className="btn btn-primary rounded-xl bg-abuMuda py-3 px-32 w-full h-20">
            Sign In
          </div>
          <div className="btn btn-primary rounded-xl bg-whitepy-3 px-32 w-full h-20">
            Sign Up
          </div>
        </div>
      )}
      {isShow && token !== "" && (
        <div className="bg-white shadow-lg rounded-b-3xl absolute w-full top-16 flex flex-col justify-center md:hidden items-center px-5 py-5 flex-shrink-0 gap-2">
          <div className="block md:hidden avatar placeholder">
            <div className="w-14 flex justify-center aspect-square bg-primary text-sm text-neutral rounded-full">
              {profile?.image === null ? (
                <img src={avatarWhite} alt="avatar" />
              ) : (
                <img src={avatar} alt="avatar" />
              )}
            </div>
          </div>
          <button
            onClick={() => logout()}
            className="btn btn-primary text-neutral"
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
