import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const Performance = () => {
  return (
    <div className="bg-white ">
      <div className="p-2 ">
        <p className="mt-1 font-semibold text-xl mb-4">Performance</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black/[.6]">Today's Low</p>
            <p className="text-sm text-black/[0.8]">46,930.22</p>
          </div>
          <div className="h-[6px] w-36 bg-gradient-to-r from-red-500 via bg-orange-300 to-green-400 rounded-full relative">
            <div className="absolute left-10 flex flex-col justify-center items-center gap-1">
              <IoMdArrowDropup />
              <p className="text-xs text-black/[0.7]">$48,637.83</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black/[.6]">Today's High</p>
            <p className="text-sm text-black/[0.8]">49,743.83</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black/[.6]">52W Low</p>
            <p className="text-sm text-black/[0.8]">16,930.22</p>
          </div>
          <div className="h-[6px] w-36 bg-gradient-to-r from-red-500 via bg-orange-300 to-green-400 rounded-full "></div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black/[.6]">52W High</p>
            <p className="text-sm text-black/[0.8]">49,743.83</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;