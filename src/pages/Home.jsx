import React from "react";
import Navbar from "../components/Navbar";
import Cellphone from "../assets/images/home-page.png";
import Appstore from "../assets/icons/appstore.svg";
import Gplay from "../assets/icons/gplay.svg";
import airbnb from "../assets/icons/airbnb.svg";
import canon from "../assets/icons/canon.svg";
import dell from "../assets/icons/dell.svg";
import dropbox from "../assets/icons/dropbox.svg";
import hnm from "../assets/icons/hnm.svg";
import microsoft from "../assets/icons/microsoft.svg";
import { CiHeadphones } from "react-icons/ci";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-36 flex px-32">
          <div className="flex flex-col gap-6 w-1/2">
            <div className="text-5xl text-secondary font-medium flex flex-col gap-4 max-w-3xl">
              <span>Smart Way to Your Financial</span> <span>Business</span>
            </div>
            <div className="max-w-md">
              <span className="text-base text-info font-light">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </span>
            </div>
            <div>
              <button className="btn btn-primary font-light px-8 text-neutral">
                Get Started
              </button>
            </div>
            <div>
              <span>Available on</span>
            </div>
            <div className="flex gap-6">
              <img src={Gplay} alt="gplay" />
              <img src={Appstore} alt="appstore" />
            </div>
          </div>
          <div className="flex shrink-0 w-1/2 justify-center">
            <img src={Cellphone} alt="cellphone" />
          </div>
        </div>
        <div className="bg-abuMuda h-44 flex justify-between py-9 px-32">
          <img src={microsoft} alt="microsoft" />
          <img src={dropbox} alt="dropbox" />
          <img src={hnm} alt="hnm" />
          <img src={airbnb} alt="airbnb" />
          <img src={canon} alt="canon" />
          <img src={dell} alt="dell" />
        </div>
        <div className="py-36 px-32 flex justify-around items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-4xl font-medium">About The Aplication</span>
            </div>
            <div className="max-w-lg">
              <span className="text-base text-info">
                We have some great features from the application and it’s
                totally free to use by all users around the world.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="rounded-lg bg-primary w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <CiHeadphones />
              </div>
              <div className="text-lg font-bold text-neutral">24/7 Support</div>
              <div className="text-base text-neutral">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
            <div className="rounded-lg bg-primary w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <CiHeadphones />
              </div>
              <div className="text-lg font-bold text-neutral">24/7 Support</div>
              <div className="text-base text-neutral">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
            <div className="rounded-lg bg-primary w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <CiHeadphones />
              </div>
              <div className="text-lg font-bold text-neutral">24/7 Support</div>
              <div className="text-base text-neutral">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
