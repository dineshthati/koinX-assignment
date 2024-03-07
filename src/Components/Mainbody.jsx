import React, { useContext, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { CoinDataContext } from "../config/CoinDataContext";
import TrendingCoins from "./TrendingCoins";

const Mainbody = () => {
  const { coinId } = useParams();
  const { coinData, setCoinData } = useContext(CoinDataContext);

  const fetchCoinData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?community_data=true&developer_data=false&sparkline=true`
      );
      const { data } = response;
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinId]);

  return (
    <div className="bg-[#EEF2F4] w-full py-4 px-3 sm:px-0 mb-5 ">
      <div className="sm:flex sm:gap-0 sm:px-0">
        <div className="sm:w-2/3 pr-4 sm:pl-10 sm:pr-5">
          {/* Left Column */}
          <div className="flex">
            <p className="text-sm flex items-center gap-2">
              <span className="text-[#3E5664] ">Cryptocurrencies</span>
              <RiArrowRightDoubleLine className="text-[#3E5664]/[0.8] text-lg" />{" "}
              <span className="text-black font-medium">{coinData?.name}</span>
            </p>
          </div>
          <div
            className="flex py-3 items-center sm:px-5 sm:bg-white sm:mt-5 rounded-lg
      "
          >
            <img
              className="w-8 sm:w-10 rounded-full"
              src={coinData?.image?.small}
              alt=""
            />
            <p className="font-semibold text-2xl">{coinData?.name}</p>
            <p className="uppercase ml-3 font-semibold text-sm text-[#3E5664]">
              {coinData?.symbol}
            </p>
            <p className="ml-8 border-none sm:py-2 sm:px-3 flex justify-center items-center px-2 py-1 rounded-[4px]  bg-[#768396] font-semibold text-white">
              Rank #{coinData?.market_cap_rank}
            </p>
          </div>
          <div className="chart bg-white py-5 px-4 mt-3 sm:p-8 sm:mt-0 sm:border-t-0 rounded-lg border-[1px] border-gray-200">
            <div className="top flex flex-col gap-3 border-b-[1px] border-gray-200 ">
              <div className="flex gap-6 items-center sm:gap-9">
                <p className="font-semibold leading-none text-3xl ">
                  ${coinData?.market_data?.current_price?.usd.toLocaleString()}
                </p>
                <p className="text-[#14B079] sm:font-semibold sm:w-24 sm:h-10 font-[520] text-sm border-none flex px-2 py-1 rounded-md items-center bg-[#EBF9F4] ">
                  <IoMdArrowDropup className="mr-1 sm:text-2xl" />
                  {
                    coinData?.market_data?.price_change_percentage_24h !==
                    undefined
                      ? `${coinData.market_data.price_change_percentage_24h.toFixed(
                          2
                        )}%`
                      : "N/A" // Or any default value you want to display when the data is undefined
                  }
                </p>
                <p className="text-[#3E5664] font-[520] text-sm">(24H)</p>
              </div>
              <p className="text-sm font-medium mb-5 sm:text-xl">
                ₹ {coinData?.market_data?.current_price?.inr.toLocaleString()}
              </p>
            </div>
            <div className="bottom">
              <p className="capitalize mt-6 font-semibold text-sm sm:text-lg sm:p-2">
                {coinData?.name} price chart (USD)
              </p>
              <div className="h-48 sm:h-[72vh]">
                <TradingViewChart />
              </div>
            </div>
          </div>
          <div className="horizontal-scroller  overflow-y-scroll ">
            <Horizontal_caracel />
          </div>
          <div className="mt-6">
            <Performance data={coinData} />
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
        </div>
        <div className="sm:w-1/3 sm:flex sm:gap-5 sm:flex-col sm:px-5">
          {/* Right Column */}
          <KoinX />
          <div>
            <TrendingCoins />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
