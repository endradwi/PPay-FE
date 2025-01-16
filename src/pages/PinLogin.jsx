import image from "../assets/images/Pin_Image.svg";
import logo from "../assets/icons/ppay_logo2.png";
import { Link } from "react-router-dom";

function PinLogin() {
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
          <form className="w-full flex flex-col gap-14 md:gap-28 md:pt-24">
            <div className="flex gap-16">
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl rounded-none border-b-info box-border pl-5"
                  maxLength="1"
                />
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl  rounded-none border-b-info box-border pl-5"
                  maxlength="1"
                />
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl  rounded-none border-b-info box-border pl-5"
                  maxlength="1"
                />
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl  rounded-none border-b-info box-border pl-5"
                  maxlength="1"
                />
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl rounded-none border-b-info box-border pl-5"
                  maxlength="1"
                />
              </label>
              <label htmlFor="">
                <input
                  type="tel"
                  className="w-16 h-24 input focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 text-5xl  rounded-none border-b-info box-border pl-5"
                  maxlength="1"
                />
              </label>
            </div>
            <input type="tel" />
          <Link to="/" className="btn btn-primary text-neutral"><button >Login</button></Link>
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
