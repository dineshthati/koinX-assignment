import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";
import Fundamnetals from "./Fundamnetals";

const Performance = ({ data }) => {
  return (
    <div className="bg-white px-2 py-3 rounded-lg border-[1px] border-gray-200 sm:p-6 sm:rounded-lg ">
      <div className=" ">
        <p className="mt-1 font-semibold text-xl mb-4 sm:text-3xl sm:mb-7">
          Performance
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black/[.6] sm:text-lg ">Today's Low</p>
            <p className="text-sm text-black/[0.8] sm:text-xl">46,930.22</p>
          </div>
          <div className="h-[6px] w-36  sm:w-[550px]  bg-gradient-to-r from-red-600 via-yellow-300 to-green-500 rounded-full relative">
            <div className="absolute left-10 sm:left-[150px] flex flex-col justify-center items-center gap-1">
              <IoMdArrowDropup className="" />
              <p className="text-xs text-black/[0.7] sm:text-lg">$48,637.83</p>
            </div>
          </div>
          <div className="flex flex-col gap-2  ">
            <p className="text-sm text-black/[.6] sm:text-lg">Today's High</p>
            <p className="text-sm text-black/[0.8] sm:text-xl">49,743.83</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 ">
          <div className="flex flex-col gap-2 ">
            <p className="text-sm text-black/[.6] sm:text-lg">52W Low</p>
            <p className="text-sm text-black/[0.8] sm:text-xl">16,930.22</p>
          </div>
          <div className="h-[6px] w-36 bg-gradient-to-r sm:w-[550px]  from-red-600 via-yellow-300 to-green-500 rounded-full "></div>
          <div className="flex flex-col gap-2 sm:gap-16">
            <p className="text-sm text-black/[.6] sm:text-lg">52W High</p>
            <p className="text-sm text-black/[0.8] sm:text-xl">49,743.83</p>
          </div>
        </div>
      </div>
      <Fundamnetals />
    </div>
  );
};

export default Performance;
