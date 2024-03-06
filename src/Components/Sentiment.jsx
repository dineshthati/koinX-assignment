import React from "react";
import Cards_keyEvents from "./Cards_keyEvents";
import Fundamnetals from "./Fundamnetals";

const Sentiment = () => {
  return (
    <div className="bg-white mt-5 px-2 py-3 rounded-lg">
      <p className="font-semibold text-2xl ">Sentiment</p>
      <p className="py-1 font-semibold text-lg text-[#44475B]/[0.9] capitalize">
        key events
      </p>
      <div className=" card-scrollbar flex overflow-x-auto  gap-2  ">
        <Cards_keyEvents />
        <Cards_keyEvents />
      </div>
      <div className="p-2 mt-1">
        <p className="capitalize text-lg font-semibold text-black/[0.7]">
          analyst estimates
        </p>
        <div className="flex  mt-2 gap-2">
          <div className="flex-[0.4] rounded-full bg-[#EBF9F4] flex items-center justify-center ">
            <p className="  text-[#0FBA83]   text-4xl font-semibold">76</p>
            <span className="text-sm text-[#0FBA83]">%</span>
          </div>
          <div className="flex-[0.6] flex flex-col gap-3 py-2">
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm">Buy</p>
              <div className="w-28 rounded-md bg-[#0FBA83] h-2"></div>
              <p className=" text-sm">76%</p>
            </div>
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm">Buy</p>
              <div className="w-12 rounded-md bg-gray-300 h-2"></div>
              <p className=" text-sm">76%</p>
            </div>
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm">Buy</p>
              <div className="w-14 rounded-md bg-red-500 h-2"></div>
              <p className=" text-sm">76%</p>
            </div>
          </div>
        </div>
      </div>
      <Fundamnetals />
    </div>
  );
};

export default Sentiment;
