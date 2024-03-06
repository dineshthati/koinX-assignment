import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Fundamnetals = () => {
  const data = [
    {
      name: "Bitcoin price",
      value: "$16,815.46",
    },
    {
      name: "24h Low / 24h High",
      value: "$16,815.46 / $16,874.12",
    },
    {
      name: "7d Low / 7d High",
      value: "$16,815.46 / $16,874.12",
    },
    {
      name: "Trading Volume",
      value: "$23,249,202,782",
    },
    {
      name: "Market Cap Rank",
      value: "",
    },
    {
      name: "Market Cap Rank",
      value: "$323,507,290,047",
    },
    {
      name: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      name: "Volume / Market Cap",
      value: "0.0718",
    },
    {
      name: "All-Time High",
      value: (
        <div className="flex flex-col gap-[2px]">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-sm font-[600] leading-none">$69,044.77</p>
            <p className="text-red-500">-75.6%</p>
          </div>
          <p className="text-[10px] font-light">Nov 10,2021 (about 1 year)</p>
        </div>
      ),
    },
    {
      name: "All-Time Low",
      value: (
        <div className="flex flex-col gap-[2px]">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-sm font-[600] leading-none">$67.81</p>
            <p className="text-green-500">24729.1%</p>
          </div>
          <p className="text-[10px] font-light">Jul 06,2013(over 9 years)</p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <p className=" mt-9 text-lg font-[550] text-[#44475B] flex items-center gap-1 ">
        Fundamentals
        <FaExclamationCircle className="text-[#98A2B0] w-4" />
      </p>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex py-[11px] items-center justify-between border-b-[1px] border-gray-200"
          >
            <p className="text-[#98A2B0] text-[12px] font-[600] ">
              {item.name}
            </p>
            <p className="text-xs font-semibold text-[#2F3542] mr-2">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Fundamnetals;
