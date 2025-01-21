import { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import PinSuccess from "./PinSuccess";
import { tokenAtom, amountAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Pin(props) {
  const params = useParams();
  const pinRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useAtom(amountAtom);
  const [token, setToken] = useAtom(tokenAtom);
  const [status, setStatus] = useState(0);

  const pinValidationSchema = yup.object({
    // pin_0: yup.string().required(),
    // pin_1: yup.string().required(),
    // pin_2: yup.string().required(),
    // pin_3: yup.string().required(),
    // pin_4: yup.string().required(),
    pin_5: yup.string().required("Pin is required"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(pinValidationSchema),
  });

  function verifyPin(value) {
    // console.log(value);
    const valString = Object.keys(value)
      .sort()
      .map((key) => value[key])
      .join("");
    const pinVal = {
      pin: valString,
    };

    const query = new URLSearchParams(pinVal);
    const queryString = query.toString();

    fetch(`${API_URL}/auth/pin`, {
      method: "POST",
      body: queryString,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((v) => {
        if (v.status === 400) {
          setStatus(v.status);
          return;
        }
        if (v.status === 200) {
          fetch(`${API_URL}/transfer/${params.id}`, {
            method: "POST",
            body: `amount=${amount}`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((v) => {});
          setIsOpen(!isOpen);
          return;
        }
      });

    reset();
  }

  function moveFocus(e, index) {
    // ketika input terisi
    if (e.target.value !== "") {
      if (index === 5) {
        return;
      }
      pinRef.current[index + 1].focus();
    }
    // ketika input dihapus
    if (e.target.value === "") {
      if (index === 0) {
        return;
      }
      pinRef.current[index - 1].focus();
    }
  }

  // const togglePopupResponse = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-8  shadow-lg">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Transfer to {props.name}</div>
          <button
            onClick={() => setAmount(0)}
            className="text-3xl cursor-pointer"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="h-[510px] w-[556px]">
          <div className="w-[556px] h-[377px] flex flex-col">
            <div className="pt-16 pb-3 text-3xl">Enter Your Pin👋</div>
            <div>Enter Your Pin for transaction</div>
            <form
              onSubmit={handleSubmit(verifyPin)}
              className="w-full flex flex-col gap-5 md:gap-5 items-center pt-14 pb-32"
            >
              <div className="flex gap-6 justify-center">
                {new Array(6).fill(1).map((_, index) => {
                  const { onChange, onBlur, name, ref } = register(
                    `pin_${index}`
                  );
                  return (
                    <label key={index} htmlFor="">
                      <input
                        type="password"
                        className="focus:border-primary focus:border-b-2 min-w-2 w-full  max-w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl rounded-none border-b-info box-border pl-5"
                        maxLength="1"
                        // {...register(`pin-${index}`)}
                        onChange={(e) => {
                          moveFocus(e, index);
                          onChange(e);
                        }} // e => movefous(e)
                        name={name}
                        onBlur={onBlur}
                        ref={(el) => {
                          pinRef.current.push(el);
                          ref(el);
                        }}
                        // {...register(`pin-${index}`)}
                      />
                    </label>
                  );
                })}
                {/* <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input border-b-info box-border pl-5"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input none border-b-info box-border pl-5"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="w-16 h-20 input  border-b-info box-border pl-5"
                  />
                </label> */}
              </div>
              {errors.pin_5?.message && (
                <div className="text-error opacity-80">
                  {errors.pin_5?.message}{" "}
                </div>
              )}
              {status === 400 && (
                <div className="text-error opacity-80">Pin invalid</div>
              )}
              <button
                className="w-[556px] h-[50px] bg-primary rounded-md text-white"
                // onClick={togglePopupResponse}
              >
                Next
              </button>
            </form>
            <div>
              {/* <button
                className="w-[556px] h-[50px] bg-primary rounded-md text-white"
                // onClick={togglePopupResponse}
              >
                Next
              </button> */}
            </div>
            <div className="flex flex-row justify-center pt-3">
              <div>Forgot Your Pin? </div>
              <div className="text-primary"> Reset</div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <PinSuccess name={`${props.name}`} />}
    </div>
  );
}

export default Pin;
