import Send from "../assets/icons/Send.svg";
// import arcane from "../assets/images/arcane.jpg";
import StarBigger from "../assets/icons/StarBigger.svg";
// import verified from "../assets/icons/verified.svg";
import money from "../assets/icons/u_money-bill.svg";
import { useState, useEffect } from "react";
import Pin from "../components/Pin";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { MdOutlineVerified } from "react-icons/md";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/api-config";
import { tokenAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function TransferDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const [usersTf, setUsersTf] = useState([]);
  const [transfer, setTransfer] = useState([]);
  const [token, setToken] = useAtom(tokenAtom);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const transferValidationSchema = yup.object({
    amount: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(transferValidationSchema) });

  function formTransfer(value) {
    const query = new URLSearchParams(value);
    const queryString = query.toString();
    console.log(value);
    fetch(`${API_URL}/transfer/${params.id}`, {
      method: "POST",
      body: queryString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((v) => {
        setTransfer(v.data);
      });
  }

  useEffect(() => {
    fetch(`${API_URL}/users/transfer/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersTf(data.data);
      });
  }, [params, token]);
  return (
    <div>
      <div className="w-full flex flex-col box-border h-fit-content">
        <NavbarDashboard page={"Transfer"} />
        <div className="flex box-border w-full">
          <Sidebar page={"transfer"} side={"sidebar"} />
          <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
            <div className="hidden md:flex flex-row gap-4 items-center">
              <img src={Send} alt="" className="h-6 w-6" />
              <div className="text-base font-semibold">Transfer Money</div>
            </div>
            <div className="hidden md:flex flex-row gap-3 items-center">
              <div>
                <div className="flex flex-row gap-2 h-11 w-36 items-center">
                  <div className="bg-info h-6 w-6 rounded-full flex items-center justify-center">
                    <div className="text-xs text-neutral">1</div>
                  </div>
                  <div>
                    <div className="text-info">Find People</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <hr className="w-20 h-px bg-black border-dashed" />
              </div>
              <div>
                <div className="flex flex-row gap-2 h-11 w-36 items-center">
                  <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center">
                    <div className="text-xs text-neutral">2</div>
                  </div>
                  <div>
                    <div className="text-primary">Set Nominal</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <hr className="w-20 h-px bg-black border-dashed" />
              </div>
              <div>
                <div className="flex flex-row gap-2 h-11 w-36 items-center">
                  <div className="bg-info h-6 w-6 rounded-full flex items-center justify-center">
                    <div className="text-xs text-neutral">3</div>
                  </div>
                  <div>
                    <div className="text-info">Finish</div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(formTransfer)}
              className="md:border h-[720px] w-full"
            >
              <div className="px-5 py-4 md:px-8 md:py-6">
                <div>
                  <div className="font-semibold pb-5">People Information</div>
                </div>
                <div className="pb-6">
                  <div className="w-full h-[115px] bg-gray-200 px-5 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="avatar">
                        <div className="w-20 h-20 rounded">
                          <img src={`${API_URL}/${usersTf?.Image}`} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-secondary font-bold text-sm">
                          {usersTf?.Fullname}
                        </div>
                        <div className="text-info text-sm">
                          {usersTf?.Phone}
                        </div>
                        <span className="w-24 h-6 bg-primary text-white rounded-md flex items-center gap-2 justify-center ">
                          <MdOutlineVerified /> Verified
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src={StarBigger} alt="Favorite" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm md:text-base">Amount</div>
                  <div className="pb-4 max-w-[335px] md:max-w-fit text-xs md:text-sm">
                    Type the amount you want to transfer and then press continue
                    to the next steps.
                  </div>
                  <div className="pb-5">
                    <div className="h-16 w-full border flex justify-right gap-2 items-center px-3">
                      <img src={money} alt="" />
                      <input
                        type="text"
                        placeholder="Enter Nominal Transfer"
                        className="h-5 w-[294px] text-start"
                        id="amount"
                        {...register("amount")}
                      />
                      {errors.amount?.message && (
                        <div className="text-error opacity-80">
                          {errors.amount?.message}{" "}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm md:text-base">Notes</div>
                  <div className="pb-4 max-w-[335px] md:max-w-fit text-xs md:text-sm">
                    You can add some notes for this transfer such as payment
                    coffee or something
                  </div>
                  <div>
                    <div className="h-[223px] w-full border flex justify-right gap-2 items-start px-3">
                      <input
                        type="text"
                        placeholder="Enter Some Notes"
                        className="h-5 w-[294px] text-start px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="w-full h-[45px] bg-primary"
                    onClick={togglePopup}
                  >
                    <div className="text-white font-normal text-sm">
                      Submit & Transfer
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {isOpen && <Pin />}
        </div>
      </div>
    </div>
  );
}

export default TransferDetail;
