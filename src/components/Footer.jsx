import React from "react";
import ppay from "../assets/icons/ppay.svg";
import { BsTelephone } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-9 md:px-12 px-6 xl:px-32 flex gap-7 flex-col">
      <div className="border-b-2 border-b-abuMuda pb-24 gap-8 flex flex-col xl:flex-row justify-between">
        <div className="flex flex-col gap-6 max-w-64">
          <div className="w-56">
            <img src={ppay} alt="ppay" />
          </div>
          <div className="text-neutral">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-lg font-semibold text-neutral">GET IN TOUCH</div>
          <div className="flex flex-col gap-3">
            <div className="text-neutral flex items-center gap-4">
              <BsTelephone />
              <div>+62 5637 8882 9901</div>
            </div>
            <div className="text-neutral flex items-center gap-4">
              <FiMail />
              <div>contact@zwallet.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-lg font-semibold text-neutral">SOCIAL MEDIA</div>
          <div className="flex gap-5">
            <div className="w-11 aspect-square bg-neutral rounded-full flex justify-center items-center text-xl text-primary cursor-pointer">
              <FaTwitter />
            </div>
            <div className="w-11 aspect-square bg-neutral rounded-full flex justify-center items-center text-xl text-primary cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-11 aspect-square bg-neutral rounded-full flex justify-center items-center text-xl text-primary cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-11 aspect-square bg-neutral rounded-full flex justify-center items-center text-xl text-primary cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-6">
          <label
            htmlFor="subscriber"
            className="text-lg font-semibold text-neutral"
          >
            NEWSLETTER
          </label>
          <div className="flex flex-col gap-4">
            <div className="w-full lg:w-72 h-11 rounded-lg overflow-hidden relative">
              <input
                type="email"
                id="subscriber"
                name="subscriber"
                placeholder="Enter your email"
                className="outline-none w-full h-full box-border px-10"
              />
              <FiMail className="absolute top-[13px] text-lg left-3 text-gray-400" />
            </div>
            <button className="btn btn-neutral lg:w-72 w-full h-9 font-light text-primary">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="text-center text-neutral text-sm">
        © Copyright 2022, All Rights Reserved by ClarityUI
      </div>
    </footer>
  );
}

export default Footer;
