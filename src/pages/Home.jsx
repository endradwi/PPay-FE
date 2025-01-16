import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cellphone from "../assets/images/home-page.png";
import Appstore from "../assets/icons/appstore.svg";
import Gplay from "../assets/icons/gplay.svg";
import airbnb from "../assets/icons/airbnb.svg";
import canon from "../assets/icons/canon.svg";
import dell from "../assets/icons/dell.svg";
import dropbox from "../assets/icons/dropbox.svg";
import hnm from "../assets/icons/hnm.svg";
import microsoft from "../assets/icons/microsoft.svg";
import star from "../assets/icons/star.svg";
import mobile from "../assets/images/Mobile-dashboard.png";
import avatar from "../assets/images/avatar.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { PiMoneyWavy } from "react-icons/pi";
import { LuUserCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-36 flex px-6 gap-6 lg:gap-0 md:px-12 items-center lg:px-32 flex-col-reverse lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className=" text-4xl lg:text-5xl text-secondary font-medium lg:max-w-3xl">
              Smart Way to Your Financial Business
            </div>
            <div className="max-w-md">
              <span className="text-base text-info font-light">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </span>
            </div>
            <Link to="/dashboard"><div>
              <button className="btn btn-primary font-light px-8 text-neutral">
                Get Started
              </button>
            </div></Link>
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
        <div className="bg-abuMuda gap-20 flex-wrap flex justify-center py-9 px-32">
          <img src={microsoft} alt="microsoft" />
          <img src={dropbox} alt="dropbox" />
          <img src={hnm} alt="hnm" />
          <img src={airbnb} alt="airbnb" />
          <img src={canon} alt="canon" />
          <img src={dell} alt="dell" />
        </div>
        <div className="py-36 lg:px-12 px-6 md:px-32 gap-10 xl:flex-row flex-col text-center lg:text-start flex justify-around items-center">
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
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="rounded-lg bg-primary w-full lg:w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <CiHeadphones />
              </div>
              <div className="text-lg font-bold text-neutral">24/7 Support</div>
              <div className="text-base text-neutral">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
            <div className="rounded-lg bg-primary w-full lg:w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="text-lg font-bold text-neutral">Data Privacy</div>
              <div className="text-base text-neutral">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </div>
            </div>
            <div className="rounded-lg bg-primary w-full lg:w-52 flex flex-col gap-5 py-9 text-center px-3 items-center">
              <div className="w-14 aspect-square bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <IoDownloadOutline />
              </div>
              <div className="text-lg font-bold text-neutral">
                Easy Download
              </div>
              <div className="text-base text-neutral">
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary flex flex-col xl:flex-row items-center justify-center xl:justify-center xl:items-end py-24 md:px-12 px-6 lg:px-32 gap-56">
          <div className="flex justify-center items-center">
            <img src={mobile} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-neutral font-medium text-4xl">
              All The Great Zwallet Features.
            </div>
            <div className="text-base text-neutral font-light">
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </div>
            <div className="flex gap-3 items-center lg:items-start">
              <div className="w-14 flex-shrink-0 h-14 bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <PiMoneyWavy />
              </div>
              <div className="flex text-neutral flex-col gap-2 justify-center">
                <div className="font-semibold text-lg">Small Fee</div>
                <div className="text-base font-light">
                  We only charge 5% of every success transaction done in Zwallet
                  app.
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center lg:items-start">
              <div className="w-14 flex-shrink-0 h-14 bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="flex text-neutral flex-col gap-2 justify-center">
                <div className="font-semibold text-lg">Data Secured</div>
                <div className="text-base font-light">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center lg:items-start">
              <div className="w-14 flex-shrink-0 h-14 bg-neutral rounded-full flex justify-center items-center text-3xl text-primary">
                <LuUserCheck />
              </div>
              <div className="flex text-neutral flex-col gap-2 justify-center">
                <div className="font-semibold text-lg">User Friendly</div>
                <div className="text-base font-light">
                  Zwallet come up with modern and sleek design and not
                  complicated.
                </div>
              </div>
            </div>
            <div>
             <Link to="/dashboard" className="btn w-full md:w-44 btn-neutral font-light text-primary px-11"> <button >
                Get Started
              </button> </Link>
            </div>
          </div>
        </div>
        <div className="md:px-12 px-6 lg:px-32 flex flex-col items-center gap-8 lg:gap-20 text-center py-20">
          <div className="text-3xl  max-w-96 lg:max-w-full  lg:text-5xl font-medium">
            Here From Our Customer
          </div>
          <div className="text-info">
            We always do our best for our customers to stay comfortable using
            the applications we provide
          </div>
          <div className="flex gap-11 items-center justify-center">
            <div className="btn hidden xl:flex hover:bg-primary hover:text-neutral rounded-full w-12 aspect-square border-none bg-abuMuda">
              <FaArrowLeftLong />
            </div>
            <div className="rounded-lg bg-abuMuda w-72 hidden xl:flex flex-col gap-5 py-14 text-secondary text-center px-3 items-center">
              <div className="avatar placeholder">
                <div className="w-12 h-12 rounded-full">
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
              <div className="text-lg font-bold">Sherina Claw</div>
              <div className="flex gap-4 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <div className="text-info">5.0</div>
              </div>
              <div className="text-5xl font-bold">“</div>
              <div className="text-base text-info">
                “I use Zwallet to manage all financial needs. It’s super easy to
                use and it’s 100% free app”
              </div>
            </div>
            <div className="rounded-lg bg-abuMuda w-72 flex flex-col gap-5 py-14 text-secondary text-center px-3 items-center">
              <div className="avatar placeholder">
                <div className="w-12 h-12 rounded-full">
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
              <div className="text-lg font-bold">James Bond</div>
              <div className="flex gap-4 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <div className="text-info">5.0</div>
              </div>
              <div className="text-5xl font-bold">“</div>
              <div className="text-base text-info">
                “Since I’m using this app, I’m not going to move to another
                similar app. Thank you Zwallet!”
              </div>
            </div>
            <div className="rounded-lg bg-abuMuda w-72 hidden xl:flex flex-col gap-5 py-14 text-secondary text-center px-3 items-center">
              <div className="avatar placeholder">
                <div className="w-12 h-12 rounded-full">
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
              <div className="text-lg font-bold">Ujang Kayu</div>
              <div className="flex gap-4 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <div className="text-info">5.0</div>
              </div>
              <div className="text-5xl font-bold">“</div>
              <div className="text-base text-info">
                “I use this app since 2 years ago and this is the best app that
                I’ve ever use in my entire life”
              </div>
            </div>
            <div className="btn hidden xl:flex hover:bg-primary hover:text-neutral rounded-full w-12 aspect-square border-none bg-abuMuda">
              <FaArrowRightLong />
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <div className="bg-primary w-6 rounded-full"></div>
            <div className="bg-abuMuda w-2 aspect-square rounded-full"></div>
            <div className="bg-abuMuda w-2 aspect-square rounded-full"></div>
            <div className="bg-abuMuda w-2 aspect-square rounded-full"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Home;
