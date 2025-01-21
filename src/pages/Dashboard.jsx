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
import React, { useState } from "react";
import { useAtom } from "jotai";
import {
  tokenAtom,
  profileAtom,
  incomeAtom,
  expenseAtom,
} from "../jotai/data.js";
import { API_URL } from "../config/api-config";

function Dashboard() {
  const [token, setToken] = useAtom(tokenAtom);
  const [balance, setBalance] = useState("");
  const [income, setIncome] = useAtom(incomeAtom);
  const [expense, setExpense] = useAtom(expenseAtom);

  const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  async function getBalance(tokenProfile) {
    const data = await (
      await fetch(`${API_URL}/users/balance/:id`, {
        headers: {
          Authorization: `Bearer ${tokenProfile}`,
        },
      })
    ).json();
    setBalance(data.data.balance);
  }
  // http://localhost:8080/transaction/income
  async function getIncome(tokenProfile) {
    const data = await (
      await fetch(`${API_URL}/transaction/income`, {
        headers: {
          Authorization: `Bearer ${tokenProfile}`,
        },
      })
    ).json();
    setIncome(data.data.income);
  }

  async function getExpense(tokenProfile) {
    const data = await (
      await fetch(`${API_URL}/transaction/expense`, {
        headers: {
          Authorization: `Bearer ${tokenProfile}`,
        },
      })
    ).json();
    setExpense(data.data.expense);
  }

  React.useEffect(() => {
    if (token !== "") {
      getBalance(token);
      getIncome(token);
      getExpense(token);
    }
  }, [token]);
  return (
    <>
      <div className="w-full flex flex-col box-border">
        <NavbarDashboard page={"dashboard"} />
        <div className="flex box-border">
          <Sidebar page={"dashboard"} side={"sidebar"} />

          <main className="w-full p-4 md:p-8">
            <section className="w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-5 pr-16 pl-3.5 whitespace-nowrap rounded-md border border-gray-200 border-solid max-md:pr-5 max-md:mt-5">
                    <div className="flex gap-3 text-base tracking-normal leading-6 text-gray-600">
                      <img
                        loading="lazy"
                        src={balanceIcon}
                        className="shrink-0 my-auto w-6 aspect-square"
                        alt="Balance"
                      />
                      <div>Balance</div>
                    </div>
                    <div className="mt-5 text-2xl font-medium tracking-normal leading-6 text-slate-900">
                      {formatRupiah(balance)}
                    </div>
                    <div className="flex gap-5 mt-6 text-xs">
                      <div className="flex flex-col flex-1">
                        <div className="tracking-normal text-gray-600 leading-[200%]">
                          Income
                        </div>
                        <div className="flex gap-1.5 mt-3.5 text-right text-green-700 leading-[150%]">
                          <div>{income}</div>
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
                          <div>{expense}</div>
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
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-3.5 py-16 text-base tracking-normal rounded-md border border-gray-200 border-solid max-md:mt-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="my-auto font-semibold leading-6 text-slate-900">
                        Fast Service
                      </div>
                      <div className="flex gap-3.5 text-white leading-[150%]">
                        <Link to={"/transfer"}>
                          <button className="flex gap-2 py-1 pr-3 pl-2 whitespace-nowrap bg-blue-600 rounded-md">
                            <img
                              loading="lazy"
                              src={transfer}
                              className="shrink-0 w-6 aspect-square"
                              alt="Transfer"
                            />
                            <span>Transfer</span>
                          </button>
                        </Link>
                        <Link to={"/topup-up"}>
                          <button className="flex gap-2 py-1 pr-3 pl-2 bg-blue-600 rounded-md">
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
            <section className="mt-4 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full justify-between">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <FinancialChart />
                </div>
                <div className="flex flex-col w-fit max-md:ml-0 max-md:w-full">
                  <TransactionHistory />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
