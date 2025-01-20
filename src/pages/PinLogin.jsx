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
          navigate("/");
          return;
        }
      });
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
          return;
        }
      });
  }, [token]);
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
            <div className="flex gap-16">
              {new Array(6).fill(1).map((_, index) => {
                const { onChange, onBlur, name, ref } = register(
                  `pin-${index}`
                );
                return (
                  <label key={index} htmlFor="">
                    <input
                      type="password"
                      className="focus:border-primary focus:border-b-2 w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl rounded-none border-b-info box-border pl-5"
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
