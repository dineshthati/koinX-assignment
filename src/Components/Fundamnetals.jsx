import React, { useContext } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { CoinDataContext } from "../config/CoinDataContext";

const Fundamnetals = () => {
  const { coinData } = useContext(CoinDataContext);

  const date = (somedate) => {
    const dateString = somedate;
    const dateObject = new Date(dateString);

    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    const now = new Date();
    const timeDifferenceInMilliseconds = now - dateObject;
    const yearsAgo = Math.floor(
      timeDifferenceInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );

    const aboutYearsAgo = `About ${yearsAgo} year${
      yearsAgo === 1 ? "" : "s"
    } ago`;

    console.log(`${formattedDate} (${aboutYearsAgo})`);
    return `${formattedDate} (${aboutYearsAgo})`;
  };

  const data = [
    {
      name: `${coinData?.name}`,
      value: "$16,815.46",
    },
    {
      name: "24h Low / 24h High",
      value: `$${coinData?.market_data?.low_24h?.usd.toLocaleString()} / $${coinData?.market_data?.high_24h?.usd.toLocaleString()}`,
    },
    {
      name: "7d Low / 7d High",
      value: "$16,815.46 / $16,874.12",
    },
    {
      name: "Trading Volume",
      value: `$${coinData?.market_data?.total_volume?.usd.toLocaleString()}`,
    },
    {
      name: "Market Cap Rank",
      value: `#${coinData?.market_cap_rank}`,
    },
    {
      name: "Market Cap",
      value: `$${coinData?.market_data?.market_cap?.usd.toLocaleString()}`,
    },
    {
      name: "Market Cap Dominance",
      value:
        (
          (parseFloat(coinData?.market_data?.market_cap?.usd) / 2640000000000) *
          100
        ).toFixed(2) + "%",
    },
    {
      name: "Volume / Market Cap",
      value: eval(
        parseInt(
          coinData?.market_data?.total_volume?.usd?.toLocaleString(),
          10
        ) /
          parseInt(coinData?.market_data?.market_cap?.usd?.toLocaleString(), 10)
      ),
    },
    {
      name: "All-Time High",
      value: (
        <div className="flex flex-col gap-[2px] sm:gap-0">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-sm font-[600] sm:text-lg leading-none">
              ${coinData?.market_data?.ath?.usd.toLocaleString()}
            </p>
            <p className="text-red-500 sm:text-lg">
              {coinData?.market_data?.ath_change_percentage?.usd.toLocaleString()}
              %
            </p>
          </div>
          <p className="text-[10px] font-light sm:text-sm">
            {date(coinData?.market_data?.ath_date?.usd.toLocaleString())}
          </p>
        </div>
      ),
    },
    {
      name: "All-Time Low",
      value: (
        <div className="flex flex-col gap-[2px] sm:gap-0">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-sm font-[600] leading-none sm:text-lg">
              {" "}
              ${coinData?.market_data?.atl?.usd.toLocaleString()}
            </p>
            <p className="text-green-500 sm:text-lg">
              {coinData?.market_data?.atl_change_percentage?.usd.toLocaleString()}
              %
            </p>
          </div>
          <p className="text-[10px] font-light sm:text-sm">
            {date(coinData?.market_data?.atl_date?.usd.toLocaleString())}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <p className=" mt-9 sm:mt-5 text-lg sm:mb-5 font-[550] text-[#44475B] flex items-center gap-1 sm:text-xl ">
        Fundamentals
        <FaExclamationCircle className="text-[#98A2B0] w-4 sm:text-xl" />
      </p>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex py-[11px] items-center justify-between border-b-[1px]  border-gray-200 "
          >
            <p className="text-[#98A2B0] text-[12px] font-[600] sm:text-lg sm:font-medium">
              {item.name}
            </p>
            <p className="text-xs font-semibold text-[#2F3542] mr-2 sm:text-lg sm:font-medium">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Fundamnetals;
