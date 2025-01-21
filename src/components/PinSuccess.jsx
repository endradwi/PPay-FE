import { useState } from "react";
import { tokenAtom, amountAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import responseSuccess from "../assets/icons/responseSuccess.svg";
import PinFail from "./PinFail";

function PinSuccess(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useAtom(amountAtom);

  const togglePopupResponse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="font-semibold">Transfer to {props.name}</div>
        <div className="h-[510px] w-[556px] border">
          <div className="w-[556px] h-[377px] flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={responseSuccess}
                alt=""
                className="w-[270px] h-[270px] "
              />
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-semibold">
                Yeay Transfer <span className="text-success">Success</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div>Thank you for using this application for your financial</div>
            </div>
            <div>
              <div>
                <button
                  className="w-[556px] h-[50px] bg-primary rounded-md text-white"
                  onClick={() => setAmount(0)}
                >
                  Done
                </button>
              </div>
            </div>
            <div>
              <div>
                <button className="w-[556px] h-[50px] bg-neutral rounded-md text-primary border-2">
                  Transfer Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <PinFail />}
    </div>
  );
}

export default PinSuccess;
