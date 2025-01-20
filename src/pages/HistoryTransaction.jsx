import React from "react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import search from "../assets/icons/Search.svg";
import image from "../assets/images/avatar2.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { API_URL } from "../config/api-config";
import { useState } from "react";
import { useAtom } from "jotai";
import { tokenAtom, profileAtom } from "../jotai/data.js";
import avatarWhite from "../assets/images/avatar-white.svg";

function HistoryTransaction() {
  const [token] = useAtom(tokenAtom);
  // const [profile,] = useAtom(profileAtom);
  const [history, setHistory] = useState([]);
  async function getHistory(tokenHistory) {
    const data = await (
      await fetch(`${API_URL}/transaction/history`, {
        headers: {
          Authorization: `Bearer ${tokenHistory}`,
        },
      })
    ).json();
    setHistory(data.data);
  }
  const table = (value, index) => {
    return (
      <tr className="border-0 flex justify-between items-center px-10 odd:bg-gray-300 even:bg-neutral py-5 " key={`list-fullname-${value.id}-${index}`}>
        <td className="md:flex hidden justify-center items-center">
          {history?.related_user_image !== null ? (
            <img src={avatarWhite} alt="avatar" className="w-12 h-12 rounded-xl"/>
          ) : (
            <img src={`${API_URL}/${value?.related_user_image}`} alt="avatar" />
          )}
        </td>
        <td className="md:block items-center hidden">{value?.related_user_fullname || "Unknown"}</td>
        <td className="">
          <div className="md:hidden block">{value?.related_user_fullname}</div>
          <div>{value?.related_user_phone || "Undifined"}</div>
        </td>
        <td>{value?.amount}</td>
        <td className="md:block hidden cursor-pointer">
          <RiDeleteBin5Line className="text-warning" />
        </td>
      </tr>
    );
  };
  console.log()

  React.useEffect(() => {
    if (token !== "") {
      getHistory(token);
    }
  }, [token]);
  return (
    <div>
      <NavbarDashboard />
      <div className="flex">
        <Sidebar page={"historyTransaction"} side={"sidebar"} />
        <div className="flex flex-col gap-8 w-full p-4 md:p-8">
          <div className="flex items-center gap-3 md:bg-transparent bg-primary h-20">
            <RxCounterClockwiseClock className="text-primary w-6 h-6 hidden md:block" />
            <div className="text-base font-semibold md:pl-0 pl-10">
              History Transaction
            </div>
          </div>
          <div className="border pb-11 w-full md:w-full">
            <div className="px-8 py-6 ">
              <div>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:justify-between gap-3">
                  <div>
                    <div className="text-secondary font-semibold">
                      Find Transaction
                    </div>
                  </div>
                  <div>
                    <div className="h-10 w-[340px] border flex justify-between items-center px-3">
                      <input
                        type="text"
                        placeholder="Enter Number Or Full Name"
                        className="h-5 w-[294px] text-start"
                      />
                      <img src={search} alt="" className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 flex flex-col gap-5">
              <table className="border-collapse border-none md:border item flex justify-center text-base">
                <tbody className="w-full flex flex-col gap-5">
                {history?.map(table)}
                  {/* <tr className="border-0 flex justify-between items-center px-10 ">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block items-center hidden">Ghaluh 1</td>
                    <td className="">
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-warning">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-0 flex justify-between items-center px-10">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block hidden">Ghaluh 1</td>
                    <td>
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-success">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                  <tr className="border-0 flex justify-between items-center px-10">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block hidden">Ghaluh 1</td>
                    <td>
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-warning">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-0 flex justify-between items-center px-10">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block hidden">Ghaluh 1</td>
                    <td>
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-success">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                  <tr className="border-0 flex justify-between items-center px-10">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block hidden">Ghaluh 1</td>
                    <td>
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-warning">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-0 flex justify-between items-center px-10">
                    <td className="md:flex hidden justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    </td>
                    <td className="md:block hidden">Ghaluh 1</td>
                    <td>
                      <div className="md:hidden block">Ghaluh 1</div>
                      <div>082116304337</div>
                    </td>
                    <td className="text-success">Rp.50.000</td>
                    <td className="md:block hidden cursor-pointer">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr> */}
                </tbody>
              </table>
              <div className="md:flex hidden justify-between items-center">
                <div className="text-xs">Show 5 History of 100 History</div>
                <div className="flex gap-3">
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    Prev
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    1
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    2
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    3
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    4
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    5
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    6
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    7
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    8
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    9
                  </button>
                  <button className="btn hover:bg-info hover:text-white h-9 font-normal w-5 text-xs min-h-0">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar page={"historyTransaction"} side={"historyTransaction"} />
    </div>
  );
}

export default HistoryTransaction;
