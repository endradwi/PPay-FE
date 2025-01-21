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
        if (v.status === 200) {
          setIsOpen(true);
          setTimeout(() => {
            setIsOpen(false);  
          }, 3000);
        }
        if (v.status === 400) {
          setIsOpen2(true);
        setTimeout(() => {
          setIsOpen2(false); 
        }, 3000);
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
                  <span className="text-white">Error! Task failed.</span>
                </div>
                )}
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
