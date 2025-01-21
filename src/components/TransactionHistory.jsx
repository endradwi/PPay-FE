import React from "react";
import { useAtom } from "jotai";
// import User1 from "../assets/icons/user1.svg";
// import User2 from "../assets/icons/user2.svg";
import { tokenAtom } from "../jotai/data.js";
import avatarWhite from "../assets/images/avatar-white.svg";
import { API_URL } from "../config/api-config.js";
import topupimage from "../assets/images/topupimage.png";
import { Link } from "react-router-dom";

function TransactionHistory() {
  const [token] = useAtom(tokenAtom);
  const [history, setHistory] = React.useState([]);

  const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  async function getHistory(tokenHistory) {
    const data = await (
      await fetch(`${API_URL}/transaction/history?limit=4`, {
        headers: {
          Authorization: `Bearer ${tokenHistory}`,
        },
      })
    ).json();
    setHistory(data?.data || []);
    console.log(data.data);
  }

  const table = (value, index) => {
    return (
      <div
        className="flex gap-5 justify-between items-center mt-7 text-base p-4"
        key={`list-fullname-${value.id}-${index}`}
      >
        <div className="w-14 h-14 rounded-xl overflow-hidden flex justify-center items-center">
          <img
            loading="lazy"
            src={
              value?.related_user_image
                ? `${API_URL}/${value.related_user_image}` // Use the image URL if it's not null
                : avatarWhite // Default to avatarWhite if null
            }
            className="w-full rounded-xl"
            alt={
              value?.related_user_fullname
                ? `${value.related_user_fullname}'s profile`
                : "Default avatar"
            }
          />
        </div>
        <div className="flex flex-col self-stretch pr-2.5 my-auto">
          <div className="font-semibold text-slate-900">
            {value?.related_user_fullname || "Unknown"}
          </div>
          <div className="mt-3 text-gray-600">{value?.transaction_type}</div>
        </div>
        <div
          className={
            value?.transaction_type === "Sent"
              ? "self-stretch my-auto font-semibold text-right text-warning"
              : "self-stretch my-auto font-semibold text-right text-success"
          }
        >
          {value?.transaction_type === "Sent"
            ? `-${formatRupiah(value?.amount)}`
            : `+${formatRupiah(value?.amount)}`}
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    if (token !== "") {
      getHistory(token);
    }
  }, [token]);
  // const userId = 101;
  // const transactions = [
  //   {
  //     id: 1,
  //     sender_id: 101,
  //     sender_fullname: "John Doe",
  //     sender_image: User1,
  //     type: "Transfer",
  //     transfer_amount: 150000,
  //   },
  //   {
  //     id: 2,
  //     sender_id: 102,
  //     sender_fullname: "Jane Smith",
  //     sender_image: User2,
  //     type: "Payment",
  //     transfer_amount: 250000,
  //   },
  //   {
  //     id: 3,
  //     sender_id: 103,
  //     sender_fullname: "Alice Johnson",
  //     sender_image: User1,
  //     type: "Refund",
  //     transfer_amount: 50000,
  //   },
  //   {
  //     id: 4,
  //     sender_id: 104,
  //     sender_fullname: "Bob Brown",
  //     sender_image: User2,
  //     type: "Transfer",
  //     transfer_amount: 100000,
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col grow px-5 pt-4 pb-8 rounded-md border border-gray-200 border-solid max-md:mt-5 w-full">
        <div className="flex gap-5">
          <h2 className="flex-auto text-base font-semibold tracking-normal leading-6 text-slate-900">
            Transaction History
          </h2>
          <Link to="/historyTransaction">
            <button className="text-xs font-medium tracking-normal leading-6 text-blue-600">
              See All
            </button>
          </Link>
        </div>
        {/* {transactions.map(transaction)} */}
        {history?.length === 0 ? (
          <Link to="/top-up">
            <div className="flex justify-center pt-5">
              <img src={topupimage} alt="Topup Image" />
            </div>
            <div
              to="/top-up"
              className="flex justify-center text-primary font-bold text-2xl"
            >
              Yuk Topup !
            </div>
          </Link>
        ) : (
          history.map((value, index) => table(value, index)) // Tampilkan transaksi jika ada
        )}
      </div>
    </>
  );
}

export default TransactionHistory;
