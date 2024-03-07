import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AlreadyHolding = () => {
  return (
    <div className="p-2 bg-white sm:p-5 border-t-[1px] border-gray-300">
      <p className="py-2 font-semibold sm:text-2xl">Already Holding Bitcoin?</p>
      <div className="sm:flex sm:gap-8">
        <div className="sm:w-[420px]  sm:p-4  sm:h-[180px] bg-gradient-to-r rounded-lg flex gap-4 mt-3 p-2 from-green-300 to-blue-500 ">
          <img
            className=" sm:w-[150px] sm:h-[150px] sm:object-cover w-28 h-28 rounded-lg"
            src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="sm:ml-2">
            <p
              className="text-white font-semibold capitalize sm:text-xl
          "
            >
              Calculate your <br /> profits
            </p>
            <button className="sm:text-sm sm:w-36 sm:py-2 sm:px-5  justify-center bg-white text-xs font-semibold mt-5 py-[6px] px-3 rounded-lg flex items-center gap-2 ">
              Check Now <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="sm:w-[420px]  sm:p-4  sm:h-[180px] bg-gradient-to-r rounded-lg flex gap-4 mt-3 p-2 from-orange-300 to-red-500">
          <img
            className="sm:w-[150px] sm:h-[150px] sm:object-cover w-28 h-28 rounded-lg"
            src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="sm:ml-2">
            <p
              className="text-white font-semibold capitalize sm:text-xl
          "
            >
              Calculate your <br /> profits
            </p>
            <button className="sm:text-sm sm:w-36 sm:py-2 sm:px-5 bg-white text-xs font-semibold mt-5 py-[6px] px-3 rounded-lg flex items-center gap-2 ">
              Check Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyHolding;
