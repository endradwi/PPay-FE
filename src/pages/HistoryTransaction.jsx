// import React from "react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import search from "../assets/icons/Search.svg";
import image from "../assets/images/avatar2.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";

function HistoryTransaction() {
  return (
    <div>
      <NavbarDashboard />
      <div className="flex">
        <Sidebar page={"historyTransaction"}/>
        <div className="flex pl-10  pr-20 pb-16 flex-col gap-0 md:gap-y-8">
          <div className="flex items-center gap-5 md:bg-transparent bg-primary h-20">
            <RxCounterClockwiseClock className="text-primary w-7 h-7 hidden md:block" />
            <div className="text-base font-semibold md:pl-0 pl-10">
              History Transaction
            </div>
          </div>
          <div className="border pb-11 w-[1100px]">
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
                  <tr className="border-0 flex justify-between items-center px-10 ">
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
                    <td className="md:block hidden">
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
                    <td className="md:block hidden">
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
                    <td className="md:block hidden">
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
                    <td className="md:block hidden">
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
                    <td className="md:block hidden">
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
                    <td className="md:block hidden">
                      <RiDeleteBin5Line className="text-warning" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="md:flex hidden justify-between items-center">
                <div className="text-xs">Show 5 History of 100 History</div>
                <div className="flex gap-3">
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    Prev
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    1
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    2
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    3
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    4
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    5
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    6
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    7
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    8
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    9
                  </button>
                  <button className="btn hover:bg-info h-9 font-normal w-5 text-xs min-h-0">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryTransaction;
