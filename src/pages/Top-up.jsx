// import { useState } from "react";
import Bri from "../assets/icons/bri.png";
import Dana from "../assets/icons/dana.png";
import Bca from "../assets/icons/bca.png";
import Gopay from "../assets/icons/gopay.png";
import Ovo from "../assets/icons/ovo.png";
import { MdOutlineVerified } from "react-icons/md";
import { PiUpload } from "react-icons/pi";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";

function Top_up() {
  return (
    <div>
      <div className="w-full flex flex-col box-border h-fit-content">

        <NavbarDashboard page={"profile"}/>
        <div className="flex box-border">
            <Sidebar page={"top-up"} side={"sidebar"}/>
            <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
                <section className="px-9 py-4 flex flex-col gap-8">
                  <div className="flex gap-3 items-center text-primary">
                    <div>
                      <PiUpload className="w-6 h-6" />
                    </div>
                    <div className="text-secondary font-semibold text-base">
                      Top Up Account
                    </div>
                  </div>
                  <div className="flex gap-8">
                  <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[792px] md:border-2 md:border-abuMuda">
                      <div className="flex flex-col gap-3">
                        <div className="text-secondary font-bold text-base">
                          Account Information
                        </div>
                        <div className="w-full h-[115px] flex flex-col py-3.5 px-5 bg-abuMuda">
                          <div className="flex items-center gap-2.5">
                            <div className="avatar">
                              <div className="w-20 h-20 rounded">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="text-secondary font-bold text-sm">
                                Ghaluh Wizard
                              </div>
                              <div className="text-info text-sm">(239) 555-0108</div>
                              <span className="w-24 h-6 bg-[#2948FF] text-white rounded-md flex items-center gap-2 justify-center ">
                                <MdOutlineVerified /> Verified
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                          <div className="text-secondary font-bold text-base">
                            Amount
                          </div>
                          <div className="text-info text-sm">
                            Type the amount you want to transfer to your e-wallet
                            account
                          </div>
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Type here"
                            className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-16"
                          />
                          
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                          <div className="text-secondary font-bold text-base">
                            Payment Method
                          </div>
                          <div className="text-info text-sm">
                            Choose your payment method for top up account
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda">
                            <input
                              type="radio"
                              name="radio-7"
                              className=" radio radio-info"
                            />
                            <img className="w-9 h-8" src={Bri} alt="" />
                            <div className="text-info text-base">
                              Bank Rakyat Indonesia
                            </div>
                          </div>
                          <div className="flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda">
                            <input
                              type="radio"
                              name="radio-7"
                              className=" radio radio-info"
                            />
                            <img className="w-9 h-4" src={Dana} alt="" />
                            <div className="text-info text-base">Dana</div>
                          </div>
                          <div className="flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda">
                            <input
                              type="radio"
                              name="radio-7"
                              className="btn-primary radio radio-info"
                            />
                            <img className="w-9 h-5" src={Bca} alt="" />
                            <div className="text-info text-base">
                              Bank Central Asia
                            </div>
                          </div>
                          <div className="flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda">
                            <input
                              type="radio"
                              name="radio-7"
                              className="btn-primary radio radio-info"
                            />
                            <img className="w-9 h-4" src={Gopay} alt="" />
                            <div className="text-info text-base">Gopay</div>
                          </div>
                          <div className="flex gap-7 py-3.5 pl-4 items-center rounded-lg w-full h-14 bg-abuMuda">
                            <input
                              type="radio"
                              name="radio-7"
                              className="btn-primary radio radio-info"
                            />
                            <img className="w-9 h-4" src={Ovo} alt="" />
                            <div className="text-info text-base">Ovo</div>
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-7">
                        <div className="text-secondary font-bold text-base">
                          Payment
                        </div>
                        <div className="flex flex-col gap-5">
                          <div className="flex justify-between">
                            <div className="text-info font-semibold text-base">
                              Order
                            </div>
                            <div className="text-secendary font-semibold text-base">
                              Idr. 40.000
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-info font-semibold text-base">
                              Delivery
                            </div>
                            <div className="text-secendary font-semibold text-base">
                              Idr. 0
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-info font-semibold text-base">
                              Tax
                            </div>
                            <div className="text-secendary font-semibold text-base">
                              Idr. 4000
                            </div>
                          </div>
                          <div className="w-full h-1 rounded-full bg-abuMuda"></div>
                          <div className="flex justify-between">
                            <div className="text-info font-semibold text-base">
                              Sub Total
                            </div>
                            <div className="text-secendary font-semibold text-base">
                              Idr.44.000
                            </div>
                          </div>
                          <button className="bg-[#2948FF] w-full h-11 text-white text-base rounded-md">
                            Submit
                          </button>
                          <div className="text-info text-base">
                            *Get Discount if you pay with Bank Central Asia
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-4 px-7 py-4 w-[341px] h-[378px] border-2 border-abuMuda">
                      <div className="text-secondary font-bold text-base">
                        Payment
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex justify-between">
                          <div className="text-info font-semibold text-base">
                            Order
                          </div>
                          <div className="text-secendary font-semibold text-base">
                            Idr. 40.000
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-info font-semibold text-base">
                            Delivery
                          </div>
                          <div className="text-secendary font-semibold text-base">
                            Idr. 0
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-info font-semibold text-base">Tax</div>
                          <div className="text-secendary font-semibold text-base">
                            Idr. 4000
                          </div>
                        </div>
                        <div className="w-full h-1 rounded-full bg-abuMuda"></div>
                        <div className="flex justify-between">
                          <div className="text-info font-semibold text-base">
                            Sub Total
                          </div>
                          <div className="text-secendary font-semibold text-base">
                            Idr.44.000
                          </div>
                        </div>
                        <button className="bg-[#2948FF] w-full h-11 text-white text-base rounded-md">
                          Submit
                        </button>
                        <div className="text-info text-base">
                          Get Discount if you pay with Bank Central Asia
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Top_up;
