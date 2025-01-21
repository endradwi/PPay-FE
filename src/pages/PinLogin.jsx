import React, { useRef, useState } from "react";
import image from "../assets/images/Pin_Image.svg";
import logo from "../assets/icons/ppay_logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config/api-config";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { tokenAtom } from "../jotai/data.js";

function PinLogin() {
  const { handleSubmit, register } = useForm();
  const [statusPin, setStatusPin] = useState(0);
  const [token, setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();
  const pinRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function formPin(value) {
    const valString = Object.keys(value)
      .sort()
      .map((key) => value[key])
      .join("");
    const pinVal = {
      pin: valString,
    };

    const query = new URLSearchParams(pinVal);
    const queryString = query.toString();

    fetch(`${API_URL}/users/:id`, {
      method: "PATCH",
      body: queryString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((v) => {
        // console.log(v.status);
        if (v.status === 200) {
          setIsOpen(true);
          setTimeout(() => {
            setIsOpen(false); 
            navigate("/"); 
          }, 3000);
        }

        if (v.status === 400) {
          setIsOpen2(true);
        setTimeout(() => {
          setIsOpen2(false); 
        }, 3000);
        }
      })
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

  React.useEffect(() => {
    fetch(`${API_URL}/auth/pin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((v) => {
        console.log(v.status);
        if (v.status === 200) {
          navigate("/");
          return
        }
      })
      
  }, [token, navigate]);
  
  return (
    <div>
      <div className="flex h-screen bg-primary md:py-0 px-5 md:px-0 py-40">
        <div className="md:py-28 py-10 px-4 md:px-36 md:rounded-r-[100px] rounded-xl w-full md:w-[1000px] bg-neutral flex flex-col gap-1 md:gap-5">
          <div className="items-center">
            <img src={logo} alt="" className="w-32 h-10" />
          </div>
          <div className=" text-lg md:text-3xl font-medium">
            Enter Your Pin 👋
          </div>
          <div className="text-xs md:text-base">
            Please save your pin because this so important.
          </div>
          <form
            onSubmit={handleSubmit(formPin)}
            className="w-full flex flex-col gap-14 md:gap-28 md:pt-24"
          >
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
                  <span className="text-white">Pin successfully</span>
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
            <div className="flex gap-3 md:gap-10 justify-center">
              {new Array(6).fill(1).map((_, index) => {
                const { onChange, onBlur, name, ref } = register(
                  `pin-${index}`
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
            </div>
            <button className="btn btn-primary text-neutral" type="submit">
              Login
            </button>
          </form>
          <div className="w-full flex justify-center">
            Forgot Your Pin?
            <span className="text-primary">
              <Link to="/">Reset</Link>
            </span>
          </div>
        </div>
        <div className="flex-1 md:flex hidden justify-center items-center">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default PinLogin;
