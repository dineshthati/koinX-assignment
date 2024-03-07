import React, { useContext, useState } from "react";
import Cards_keyEvents from "./Cards_keyEvents";
import Fundamnetals from "./Fundamnetals";
import { CoinDataContext } from "../config/CoinDataContext";

const Sentiment = () => {
  const { coinData } = useContext(CoinDataContext);
  // const [value, setValue] = useState("");

  return (
    <div className="bg-white mt-5 px-2 py-3 rounded-lg sm:p-5 ">
      <p className="font-semibold text-2xl sm:text-2xl">Sentiment</p>
      <p className="py-1 sm:py-5 font-semibold text-lg text-[#44475B]/[0.9] capitalize sm:text-xl">
        key events
      </p>
      <div className=" card-scrollbar flex overflow-x-auto  gap-2 sm:gap-4 ">
        <Cards_keyEvents />
        <Cards_keyEvents />
      </div>
      <div className="p-2 mt-1 sm:py-5 sm:px-3 ">
        <p className="capitalize text-lg font-semibold text-black/[0.7] sm:text-2xl">
          analyst estimates
        </p>
        <div className="flex  mt-2 gap-2 sm:gap-10 sm:mt-5">
          <div className="flex-[0.4]  sm:h-48  rounded-full h-32 bg-[#EBF9F4] flex items-center justify-center ">
            <p className="  text-[#0FBA83]   text-4xl font-semibold sm:font-medium sm:text-5xl">
              {coinData?.sentiment_votes_up_percentage?.toFixed()}
            </p>
            <span className="text-sm text-[#0FBA83] ">%</span>
          </div>
          <div className="flex-[0.6]  flex flex-col gap-3 sm:gap-5 py-2 sm:mr-32">
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm sm:text-lg">Buy</p>
              <div className="w-28  h-2  rounded-md bg-[#0FBA83] sm:w-[400px]"></div>
              <p className=" text-sm sm:text-lg">
                {coinData?.sentiment_votes_up_percentage?.toFixed(2)}%
              </p>
            </div>
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm sm:text-lg">Hold</p>
              <div className="w-12 rounded-md h-2 bg-gray-300 "></div>
              <p className=" text-sm sm:text-lg">8%</p>
            </div>
            <div className="flex text-[#2F3542] gap-5  items-center">
              <p className="text-sm sm:text-lg">Sell</p>
              <div className="w-14 rounded-md h-2 bg-red-500 "></div>
              <p className=" text-sm sm:text-lg">
                {coinData?.sentiment_votes_down_percentage?.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <Fundamnetals />
      </div>
    </div>
  );
};

export default Sentiment;
