import React, { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import TradingViewChart from "./TradingViewChart";
import Horizontal_caracel from "./Horizontal-carasel";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import About_Bitcoin from "./About-Bitcoin";
import AlreadyHolding from "./AlreadyHolding";
import Team from "./Team";
import YouMAyAlsoLike from "./YouMAyAlsoLike";
import KoinX from "./KoinX";
import axios from "axios";

const Mainbody = () => {
  const [coinData, setCoinData] = useState([]);

  const fetchCoinData = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/bitcoin?community_data=true&developer_data=false&sparkline=true

`
      )
      .then((res) => {
        const { data } = res;
        setCoinData(data);
        console.log(data);
        console.log(coinData);
      });
  };

  useState(() => {
    fetchCoinData();
  }, []);
  return (
    <div className="bg-[#EEF2F4] w-full py-4 px-3 mb-5">
      <div className="flex">
        <p
          className="text-sm flex items-center
         gap-2"
        >
          <span className="text-[#3E5664] ">Cryptocurrencies</span>
          <RiArrowRightDoubleLine className="text-[#3E5664]/[0.8] text-lg" />{" "}
          <span className="text-black font-medium">Bitcoin</span>
        </p>
      </div>
      <div
        className="flex py-3 items-center
      "
      >
        <img className="w-8 rounded-full" src="" alt="" />
        <p className="font-semibold text-2xl">Bitcoin</p>
        <p className="uppercase ml-3 font-semibold text-sm text-[#3E5664]">
          BTC
        </p>
        <p className="ml-8 border-none flex justify-center items-center px-2 py-1 rounded-[4px]  bg-[#768396] font-semibold text-white">
          Rank #1
        </p>
      </div>
      <div className="chart bg-white py-5 px-4 mt-3 rounded-lg border-[1px] border-gray-200">
        <div className="top flex flex-col gap-3 border-b-[1px] border-gray-200 ">
          <div className="flex gap-6 items-center">
            <p className="font-semibold leading-none text-3xl">$16,953.04</p>
            <p className="text-[#14B079] font-[520] text-sm border-none flex px-2 py-1 rounded-md items-center bg-[#EBF9F4] ">
              <IoMdArrowDropup className="mr-1" /> 2.51%
            </p>
            <p className="text-[#3E5664] font-[520] text-sm">(24H)</p>
          </div>
          <p className="text-sm font-medium mb-5 ">₹ 13,42,232</p>
        </div>
        <div className="bottom">
          <p className="capitalize mt-6 font-semibold text-sm">
            bitcoin price chart (USD)
          </p>
          <div className="h-48">{/* <TradingViewChart /> */}</div>
        </div>
      </div>
      <div className="horizontal-scroller  overflow-y-scroll ">
        <Horizontal_caracel />
      </div>
      <div className="mt-6">
        <Performance />
      </div>
      <div>
        <Sentiment />
      </div>
      <div>
        <About_Bitcoin />
      </div>
      <AlreadyHolding />
      <Team />
      <YouMAyAlsoLike />
      <div className="">
        <YouMAyAlsoLike />
      </div>
      <div>
        <KoinX />
      </div>
    </div>
  );
};

export default Mainbody;
