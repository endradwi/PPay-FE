import { useState } from "react";
import PinSuccess from "./PinSuccess";

function Pin() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopupResponse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="font-semibold">Transfer to Arcane</div>
        <div className="h-[510px] w-[556px] border">
          <div className="w-[556px] h-[377px] flex flex-col">
            <div className="pt-16 pb-3 text-3xl">Enter Your Pin👋</div>
            <div>Enter Your Pin for transaction</div>
            <form className="w-full flex flex-col gap-14 md:gap-28 pt-14 pb-32">
              <div className="flex gap-6">
                <label htmlFor="" className="flex flex-col gap-1">
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
                </label>
              </div>
            </form>
            <div>
              <button
                className="w-[556px] h-[50px] bg-primary rounded-md text-white"
                onClick={togglePopupResponse}
              >
                Next
              </button>
            </div>
            <div className="flex flex-row justify-center pt-3">
              <div>Forgot Your Pin? </div>
              <div className="text-primary"> Reset</div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <PinSuccess />}
    </div>
  );
}

export default Pin;
