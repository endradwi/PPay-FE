import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import topUp from "../assets/icons/top-up.svg";
import transfer from "../assets/icons/transfer.svg";
import balanceIcon from "../assets/icons/transfer.svg";
import Upgraph from "../assets/icons/up-graph.svg";
import Downgraph from "../assets/icons/down-graph.svg";
import { Link } from "react-router-dom";
import FinancialChart from "../components/FinancialChart";
import TransactionHistory from "../components/TransactionHistory";
import { FaPlus } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

function Dashboard() {
  return (
    <>
      <div className="w-full flex flex-col box-border h-fit-content">
        <NavbarDashboard page={"dashboard"} />
        <div className="flex box-border">
          <Sidebar page={"dashboard"} side={"sidebar"}/>
          <main className="w-full p-4 md:p-8">
            <section className="w-full  max-md:max-w-full">
              <div className="flex gap-5 md:w-full w-[715px] md:top-0 top-14 md:rounded-none rounded-2xl md:px-0 px-10 max-xl:flex-col max-md:gap-0 md:static absolute shadow-lg md:shadow-none bg-white">
                <div className="flex flex-col  w-[33%] max-md:ml-0 max-xl:w-full">
                  <div className="flex md:flex-col justify-between grow items-center md:items-start py-5 pr-16 pl-3.5 rounded-none md:rounded-md border-none md:border md:border-solid max-md:pr-5 max-md:mt-5">
                    <div className="flex justify-start py-8 flex-col gap-3 text-base tracking-normal leading-6 text-gray-600">
                      {/* <img
                        loading="lazy"
                        src={balanceIcon}
                        className="shrink-0 my-auto w-6 aspect-square"
                        alt="Balance"
                      /> */}
                      <div className="md:text-base text-xs">Balance</div>
                      <div className="md:mt-5 text-2xl font-medium tracking-normal leading-6 text-slate-900">
                        Rp.200000
                      </div>
                    </div>
                    {/* <div className="md:mt-5 text-2xl font-medium tracking-normal leading-6 text-slate-900">
                      Rp.200000
                    </div> */}
                    <div className="hidden md:flex gap-5 mt-6 text-xs">
                      <div className="flex flex-col flex-1">
                        <div className="tracking-normal text-gray-600 leading-[200%]">
                          Income
                        </div>
                        <div className="flex gap-1.5 mt-3.5 text-right text-green-700 leading-[150%]">
                          <div>Rp.200.000</div>
                          <div>+2%</div>
                          <img
                            loading="lazy"
                            src={Upgraph}
                            className="shrink-0 self-start w-4 aspect-square"
                            alt="Income Graph"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="tracking-normal text-gray-600 leading-[200%]">
                          Expense
                        </div>
                        <div className="flex gap-1.5 mt-3 text-right text-red-700 leading-[150%]">
                          <div>Rp.100.000</div>
                          <div>+5%</div>
                          <img
                            loading="lazy"
                            src={Downgraph}
                            className="shrink-0 self-start w-4 aspect-square"
                            alt="Expense Graph"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-7">
                      <div className="flex flex-col items-center gap-3">
                        <button className="btn btn-primary text-neutral text-xl rounded-full md:rounded w-12 md:w-16 shadow-lg h-6 md:hidden">
                          <FaPlus />
                        </button>
                        <div>Top Up</div>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <button className="btn btn-primary text-neutral text-xl rounded-full md:rounded w-12 md:w-16 shadow-lg h-6 md:hidden">
                          <IoPaperPlane />
                        </button>
                        <div>Transfer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col ml-5 w-[67%] max-xl:ml-0 max-xl:w-full">
                  <div className="flex flex-col grow justify-center px-3.5 py-16 text-base tracking-normal rounded-md border border-gray-200 border-solid max-md:mt-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="my-auto font-semibold leading-6 text-slate-900">
                        Fast Service
                      </div>
                      <div className="flex gap-3.5 text-white leading-[150%]">
                        <Link to={"/user/transfer"}>
                          <button className="flex gap-2 py-3 pr-5 pl-4 whitespace-nowrap bg-blue-600 rounded-md">
                            <img
                              loading="lazy"
                              src={transfer}
                              className="shrink-0 w-6 aspect-square"
                              alt="Transfer"
                            />
                            <span>Transfer</span>
                          </button>
                        </Link>
                        <Link to={"/user/topup"}>
                          <button className="flex gap-2 py-3 pr-5 pl-4 bg-blue-600 rounded-md">
                            <img
                              loading="lazy"
                              src={topUp}
                              className="shrink-0 w-6 aspect-square"
                              alt="Top Up"
                            />
                            <span>Top Up</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-40 md:mt-4 w-full max-md:max-w-full ">
              <div className="flex gap-5 max-2xl:flex-col max-md:gap-0 w-full items-center 2xl:items-start 2xl:justify-between">
                <div className="flex flex-col w-full 2xl:w-[67%] max-md:ml-0 max-md:w-full">
                  <FinancialChart />
                </div>
                <div className="flex flex-col w-fit max-md:ml-0 max-2xl:w-full">
                  <TransactionHistory />
                </div>
              </div>
            </section>
          </main>
        </div>
      <Sidebar page={"dashboard"} side={"dashboard"}/>
      </div>
    </>
  );
}

export default Dashboard;
