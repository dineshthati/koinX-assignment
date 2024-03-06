import { FaArrowRight } from "react-icons/fa";

import React from "react";
import working from "../../assets/working.gif";

const KoinX = () => {
  return (
    <div className="bg-[#0052FE] rounded-xl p-3 flex flex-col items-center justify-center mt-8">
      <img className="w-24 h-32" src={working} alt="" />
      <h2 className="text-white mt-2 font-semibold capitalize text-xl">
        get started with koinX for FREE
      </h2>
      <p className="text-white text-xs text-center mt-5">
        With our range of features that you can equip for free , KoinX allows
        you to be more educated and aware of your tax reports.
      </p>
      <button className="bg-white rounded-lg py-3 px-5 mt-5 mb-6 flex items-center gap-3 text-sm font-semibold">
        Get started for FREE
        <FaArrowRight />
      </button>
    </div>
  );
};

export default KoinX;
