import React, { useState } from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import CustomBounce from "../FramerMotion.jsx/CustomBounce";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbartoggle = () => {
    setIsOpen(!isOpen);
    console.log("click", isOpen);
  };
  return (
    <header className="bg-white flex justify-between shadow-md px-[20px] py-4 md:px-[100px] items-center sticky top-0 z-[1] ">
      <Link to="/">
        <CustomBounce delay="0.3">
          <h2 className="text-[30px] hover:scale-105 duration-300 leading-[27px] font-[600] md:text-[45px] md:leading-[75px] md:font-[900]">
            Noor eNazar
          </h2>
        </CustomBounce>
      </Link>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <CustomBounce delay="0.5">
        <div
          className="block opacity-[80%] scale-50 md:scale-100 cursor-pointer"
          onClick={navbartoggle}
        >
          <div
            className={`${
              isOpen
                ? " translate-y-[.50rem] rotate-45 opacity-[50%] "
                : "block"
            } w-[45px] h-[4px] rounded-sm bg-black my-2 duration-[.3s]`}
          ></div>
          <div
            className={`${
              isOpen ? "hidden" : "block"
            } w-[45px] h-[4px] rounded-sm bg-black my-2`}
          ></div>
          <div
            className={`${
              isOpen
                ? " translate-y-[-.20rem] rotate-[-45deg] opacity-[50%] "
                : "block"
            } w-[45px] h-[4px] rounded-sm bg-black my-2 duration-[.3s]`}
          ></div>
        </div>
      </CustomBounce>

      <div>
        <CustomBounce delay="0.8">
          <SocialLinks />
        </CustomBounce>
      </div>
    </header>
  );
};

export default Header;
