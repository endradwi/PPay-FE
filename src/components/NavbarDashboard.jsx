import React, { useState } from "react";
import ppay from "../assets/icons/ppay_invert.svg";
import avatar from "../assets/images/avatar.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { API_URL } from "../config/api-config";
import { tokenAtom, profileAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import { AiOutlineAlignRight } from "react-icons/ai";
import avatarWhite from "../assets/images/avatar-white.svg";

function NavbarDashboard(props) {
  const [token, setToken] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();

  function logout() {
    setProfile({});
    setToken("");
  }

  React.useEffect(() => {
    if (token === "") {
      navigate("/");
    }
  }, [token]);
  return (
    <nav className="flex justify-between md:justify-between navbar border-solid shadow-md bg-primary md:bg-neutral px-5 md:px-7 py-4">
      <Link className="md:block hidden" to={"/"}>
        <img className="h-10 md:block hidden" src={ppay} alt="ppay" />
      </Link>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="hidden md:block">
          <span className="text-info">
            {profile?.fullname === "" ? profile?.email : profile?.fullname}
          </span>
        </div>
        <div className="avatar hidden md:block placeholder">
          <div className="w-8 bg-primary border-primary border-[2px] md:w-12 aspect-square rounded-full">
            {profile?.image === null ? (
              <img src={avatar} alt="avatar" />
            ) : (
              <img src={`${API_URL}/${profile?.image}`} alt="avatar" />
            )}
          </div>
        </div>
        {isShow && (
          <div className="md:flex hidden absolute top-24 flex-col bg-white w-48">
            <Link to="/profile"><div className="flex bg-primary text-white py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
              <div>
                <AiOutlineUser />
              </div>
              <div>Profile</div>
            </div></Link>
            <div className="flex text-warning py-2.5 px-3 gap-3 items-center rounded cursor-pointer">
              <div>
                <BiLogOut />
              </div>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          </div>
        )}
        {props.page === "dashboard" && (
          <>
            <div className="avatar md:hidden  online placeholder">
              <div className="w-8 md:w-12 aspect-square rounded-full">
                {profile?.image === null ? (
                  <img src={avatar} alt="avatar" />
                ) : (
                  <img src={`${API_URL}/${profile?.image}`} alt="avatar" />
                )}
              </div>
            </div>
            <div className="md:hidden flex flex-col">
              <div className="text-xs text-neutral">Hello,</div>
              <div className="text-md text-neutral">
                {profile?.fullname === "" ? profile?.email : profile?.fullname}
              </div>
            </div>
          </>
        )}
        {props.page !== "dashboard" && (
          <>
            {" "}
            <div className="text-md md:hidden block text-neutral">
              {props.page}
            </div>
          </>
        )}
        <div
          className="text-2xl hidden md:block cursor-pointer"
          onClick={() => setShow(!isShow)}
        >
          {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="block text-neutral text-2xl md:hidden" onClick={() => setShow(!isShow)}>
      {isShow ? <AiOutlineAlignRight /> : <RxHamburgerMenu />}
      </div>
      {isShow && token !== "" && (
        <div className="bg-white shadow-lg rounded-b-3xl absolute w-full top-16 left-0 flex flex-col justify-center md:hidden items-center px-5 py-5 flex-shrink-0 gap-2">
          <Link to="/profile"><button className="btn btn-primary text-neutral px-6">
            Profile
          </button></Link>
          <button
            onClick={() => logout()}
            className="btn text-primary px-5 bg-neutral"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
    
  );
}

export default NavbarDashboard;
