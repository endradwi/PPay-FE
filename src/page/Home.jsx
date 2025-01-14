import React from "react";
import Navbar from "../components/Navbar";
import Cellphone from "../assets/images/home-page.png";
import Appstore from "../assets/icons/appstore.svg";
import Gplay from "../assets/icons/gplay.svg";

function Home() {
  return (
    <>
      <Navbar />
      <main className="px-32">
        <div className="py-36 flex">
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
      </main>
    </>
  );
}

export default Home;
