import { FaArrowRight } from "react-icons/fa";

import React from "react";
import working from "../../assets/working.gif";

const KoinX = () => {
  return (
    <div className="bg-[#0052FE] rounded-xl sm:w-[440px] sm:h-[70vh]  p-3 flex flex-col items-center justify-center mt-8 sm:mt-10">
      <div className="sm:hidden flex flex-col items-center justify-center gap-3">
        <img className="w-24 h-32" src={working} alt="" />
        <h2 className="text-white mt-2 font-semibold capitalize text-xl">
          get started with koinX for FREE
        </h2>
        <p className="text-white text-xs text-center mt-5">
          With our range of features that you can equip for free , KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-2 sm:p-5 hidden">
        <h2 className="text-white sm:text-2xl mt-2 font-semibold capitalize text-xl text-center">
          get started with koinX <br />
          for FREE
        </h2>
        <p className="text-white text-xs text-center mt-5 sm:text-lg">
          With our range of features that you can equip for free , KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img className="w-24 h-32" src={working} alt="" />
      </div>
      <button className="bg-white rounded-lg py-3 px-5 mt-5 mb-6 flex items-center gap-3 text-sm font-semibold">
        Get started for FREE
        <FaArrowRight />
      </button>
    </div>
  );
};

export default KoinX;
