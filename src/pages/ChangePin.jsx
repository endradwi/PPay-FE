import { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/api-config";
import { useAtom } from "jotai";
import { tokenAtom } from "../jotai/data.js";

function ChangePin() {
  const { handleSubmit, register, reset } = useForm();
  const pinRef = useRef([]);
  const [token, setToken] = useAtom(tokenAtom);

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
        if (v.status === 200) {
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
  return (
    <div>
      <NavbarDashboard page={"Change Pin"} />
      <div className="flex">
        <Sidebar page={"profile"} side={"sidebar"} />
        <div className="flex flex-col gap-8 w-full h-[433px] p-4 md:p-8">
          <section className="px-9 py-4 flex flex-col gap-8">
            <div className="flex gap-2 text-secondary font-bold text-base">
              <CgProfile className="text-primary w-4 h-4" /> Profile
            </div>
            <div className="text-center px-2 py-4 md:px-9 md:py-4 flex flex-col gap-10 w-full h-[450px] md:border-2 md:border-abuMuda">
              <div className="flex flex-col gap-5">
                <div className="text-secondary font-semibold text-base">
                  Change Pin 👋
                </div>
                <div className="text-info text-xs md:text-base">
                  Please save your pin because this so important.
                </div>
              </div>
              <form className="w-full" onSubmit={handleSubmit(formPin)}>
                <div className="justify-center flex gap-3 md:gap-8">
                  {new Array(6).fill(1).map((_, index) => {
                    const { onChange, onBlur, name, ref } = register(
                      `pin-${index}`
                    );
                    return (
                      <label key={index} htmlFor="">
                        <input
                          type="password"
                          className="max-w-16 w-full min-w-2 flex-shrink-1 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl rounded-none border-b-info box-border mb-10 pl-5"
                          maxLength="1"
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
                        />
                      </label>
                    );
                  })}
                </div>
                {/* <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                />
                <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                />
                <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                />
                <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                />
                <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                />
                <input
                  type="text"
                  className="focus:outline-none py-5 border-b-2 border-abuMuda w-10 h-10 md:w-16 md:h-16 rounded-md"
                /> */}
                <div className="w-full">
                  <button className="bg-primary w-full h-11 text-white rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ChangePin;
