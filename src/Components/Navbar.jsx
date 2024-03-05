import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navheaders = ["crypto taxes", "free tools", "Resource center"];
  return (
    <div className="w-full bg-white flex items-center justify-between py-1 px-5 sm:px-1">
      <div className="left">
        <img
          className="w-16 sm:w-24 sm:ml-16"
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt=""
        />
      </div>
      <div className="right flex ">
        <div className="block sm:hidden ">
          <GiHamburgerMenu style={{ color: "black" }} className="w-12" />
        </div>
        <div className="sm:flex gap-10 hidden mr-5 items-center">
          {navheaders.map((item, index) => {
            return (
              <p
                className="capitalize text-[20px] cursor-pointer tracking-tighter font-medium"
                key={index}
              >
                {item}
              </p>
            );
          })}
          <button
            className="font-semibold capitalize text-lg
           bg-blue-600 w-40 h-[44px] rounded-lg text-white"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
