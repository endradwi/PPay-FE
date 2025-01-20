import { AiOutlineDelete } from "react-icons/ai";
import NavbarDashboard from "../components/NavbarDashboard";
import { TbEdit } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { tokenAtom, profileAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import avatarWhite from "../assets/images/avatar-white.svg";
import { useState } from "react";

function Profile() {
  const [token, setToken] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function formProfile(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();

    console.log(queryString);

    fetch(`${API_URL}/users/:id`, {
      method: "PATCH",
      body: queryString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile({
          id: data.data.id,
          fullname: data.data.fullname,
          email: data.data.email,
          phone: data.data.phone,
          image: data.data.image,
        });
        // alert("update profile sukses")
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000)
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setIsOpen2(true);
        setTimeout(() => {
          setIsOpen2(false);
        }, 3000)
      });
  }

  function setImage(e) {
    const selected = e.target.files[0];
    const formData = new FormData();
    formData.append("image", selected);

    fetch(`${API_URL}/users/:id`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setProfile({
          id: data.data.id,
          fullname: data.data.fullname,
          email: data.data.email,
          phone: data.data.phone,
          image: data.data.image,
        })
      );
  }

  return (
    <>
      <NavbarDashboard />
      <div className="flex">
        <Sidebar page={"profile"} side={"sidebar"} />
        <div className="flex flex-col gap-8 pt-10">
          <section className="px-9 py-4 flex flex-col gap-8">
            <div className="flex gap-2">
              <div className="flex gap-2">
                <div className=" text-secondary">
                  <CgProfile className="text-primary w-6 h-6" />
                </div>
                <div className="font-semibold text-base">Profile</div>
              </div>
                {isOpen && (
                  <div role="alert" className="alert alert-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Profile updated successfully</span>
                </div>
                )}
                {isOpen2 && (
                  <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Error! Task failed successfully.</span>
                </div>
                )}
            </div>
            <div className="flex gap-8">
              <form
                onSubmit={handleSubmit(formProfile)}
                className="md:px-9 md:py-4 flex flex-col gap-4 w-[1056px] h-[746px] md:border-2 md:border-abuMuda"
              >
                <div className="flex flex-col gap-3">
                  <div className="text-secondary font-bold text-base">
                    Account Information
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className=" avatar">
                      <div className="w-32 h-32 rounded">
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
                    <div className="flex flex-col gap-4">
                      <div>
                        {/* <Link to="/change-pin">
                          <button className="justify-center items-center rounded-lg w-40 h-11 bg-[#2948FF] text-white flex gap-2">
                            <TbEdit className="w-6 h-6" /> Change Profile
                          </button>
                        </Link> */}
                        <label
                          className="justify-center cursor-pointer items-center rounded-lg w-40 h-11 bg-[#2948FF] text-white flex gap-2"
                          htmlFor="picture"
                        >
                          <TbEdit className="w-6 h-6" /> Change Profile
                        </label>
                        <input
                          className="hidden"
                          type="file"
                          id="picture"
                          name="image"
                          onChange={setImage}
                        />
                      </div>
                      <div>
                        <Link to="/change-password">
                          <button className="justify-center items-center rounded-lg border border-[#D00000] text-[#D00000] w-40 h-11 flex gap-2">
                            <AiOutlineDelete className="w-6 h-6" /> Delete
                            Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-info text-sm">
                    The profile picture must be 512 x 512 pixels or less
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="fullname"
                      className="text-secondary font-semibold text-base"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="flex">
                    <div className="">
                      <CgProfile className="ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      id="fullname"
                      type="text"
                      defaultValue={profile?.fullname}
                      placeholder="Type here"
                      {...register("fullname")}
                      className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                    {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="phone"
                      className="text-secondary font-semibold text-base"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="flex">
                    <div className="">
                      <LuPhone className="ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      id="phone"
                      type="text"
                      defaultValue={profile?.phone}
                      placeholder="Type here"
                      {...register("phone")}
                      className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                    {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <label
                      htmlFor="email"
                      className="text-secondary font-semibold text-base"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex">
                    <div className="">
                      <MdOutlineEmail className=" ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="text"
                      defaultValue={profile?.email}
                      placeholder="Type here"
                      {...register("email")}
                      className="input focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                    {/* <span className="absolute left-14 flex items-center cursor-pointer"><LiaMoneyBillSolid className='w-10' /></span> */}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Password
                    </div>
                  </div>
                  <div className="flex">
                    <a className="text-[#2948FF]" href="">
                      Change Password
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Pin
                    </div>
                  </div>
                  <div className="flex">
                    <a className="text-[#2948FF]" href="">
                      Change Pin
                    </a>
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
    </>
  );
}

export default Profile;