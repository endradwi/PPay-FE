import Send from "../assets/icons/Send.svg";
import arcane from "../assets/images/arcane.jpg";
import StarBigger from "../assets/icons/StarBigger.svg";
import verified from "../assets/icons/verified.svg";
import money from "../assets/icons/u_money-bill.svg";
import { useState } from "react";
import Pin from "../components/Pin";

function TransferDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="hidden md:flex flex-row gap-4 items-center">
          <img src={Send} alt="" className="h-6 w-6" />
          <div className="text-base font-semibold">Transfer Money</div>
        </div>
        <div className="flex flex-row gap-3 items-center">
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
        <div className="border h-[720px] w-[1061px]">
          <div className="px-8 py-6">
            <div>
              <div className="font-semibold pb-5">People Information</div>
            </div>
            <div className="pb-6">
              <div className="w-[994px] h-[115px] bg-gray-200 px-5 rounded-md flex items-center justify-between">
                <div className="flex flex-row gap-5 items-center">
                  <div>
                    <div className="avatar">
                      <div className="w-20 h-20 rounded overflow-hidden flex items-center justify-center">
                        <img
                          src={arcane}
                          alt="Tailwind-CSS-Avatar-component"
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>Arcane</div>
                    <div>(239) 555-0108</div>
                    <div>
                      <div className="flex flex-row gap-2 bg-primary justify-center rounded-md px-2 py-1">
                        <img src={verified} alt="" />
                        <div className="text-neutral">Verified</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={StarBigger} alt="Favorite" />
                </div>
              </div>
            </div>
            <div>
              <div>Amount</div>
              <div className="pb-4">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </div>
              <div className="pb-5">
                <div className="h-16 w-[994px] border flex justify-right gap-2 items-center px-3">
                  <img src={money} alt="" />
                  <input
                    type="text"
                    placeholder="Enter Number Or Full Name"
                    className="h-5 w-[294px] text-start"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>Notes</div>
              <div className="pb-5">
                You can add some notes for this transfer such as payment coffee
                or something
              </div>
              <div>
                <div className="h-[223px] w-[994px] border flex justify-right gap-2 items-start px-3">
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
                className="w-[994px] h-[45px] bg-primary"
                onClick={togglePopup}
              >
                <div className="text-white font-normal text-sm">
                  Submit & Transfer
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Pin />}
    </div>
  );
}

export default TransferDetail;
