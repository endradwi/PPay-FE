import React from "react";

import User1 from "../assets/icons/user1.svg";
import User2 from "../assets/icons/user2.svg";

function TransactionHistory() {
  const userId = 101;
  const transactions = [
    {
      id: 1,
      sender_id: 101,
      sender_fullname: "John Doe",
      sender_image: User1,
      type: "Transfer",
      transfer_amount: 150000,
    },
    {
      id: 2,
      sender_id: 102,
      sender_fullname: "Jane Smith",
      sender_image: User2,
      type: "Payment",
      transfer_amount: 250000,
    },
    {
      id: 3,
      sender_id: 103,
      sender_fullname: "Alice Johnson",
      sender_image: User1,
      type: "Refund",
      transfer_amount: 50000,
    },
    {
      id: 4,
      sender_id: 104,
      sender_fullname: "Bob Brown",
      sender_image: User2,
      type: "Transfer",
      transfer_amount: 100000,
    },
  ];

  return (
    <>
      <div className="flex flex-col grow px-5 pt-4 pb-8 rounded-md border border-gray-200 border-solid max-md:mt-5 w-full">
        <div className="flex gap-5">
          <h2 className="flex-auto text-base font-semibold tracking-normal leading-6 text-slate-900">
            Transaction History
          </h2>
          <button className="text-xs font-medium tracking-normal leading-6 text-blue-600">
            See All
          </button>
        </div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex gap-5 justify-between items-center mt-7 text-base p-4"
          >
            <img
              loading="lazy"
              src={transaction.sender_image}
              className="shrink-0 self-stretch w-14 aspect-square"
              alt={`${transaction.sender_fullname}'s profile`}
            />
            <div className="flex flex-col self-stretch pr-2.5 my-auto">
              <div className="font-semibold text-slate-900">
                {transaction.sender_fullname}
              </div>
              <div className="mt-3 text-gray-600">{transaction.type}</div>
            </div>
            <div
              className={`self-stretch my-auto font-semibold text-right ${
                transaction.sender_id === userId
                  ? "text-red-700"
                  : "text-green-500"
              }`}
            >
              Rp {transaction.transfer_amount.toLocaleString("id-ID")}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TransactionHistory;
