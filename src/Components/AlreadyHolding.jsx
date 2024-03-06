import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AlreadyHolding = () => {
  return (
    <div className="p-2 bg-white">
      <p className="py-2 font-semibold ">Already Holding Crypto?</p>
      <div className="bg-gradient-to-r rounded-lg flex gap-4 mt-1 p-2 from-green-300 to-blue-500">
        <img
          className="w-28 h-28 rounded-lg"
          src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div>
          <p
            className="text-white font-semibold capitalize
          "
          >
            Calculate your <br /> profits
          </p>
          <button className="bg-white text-xs font-semibold mt-5 py-[6px] px-3 rounded-lg flex items-center gap-2">
            Check Now <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r rounded-lg flex gap-4 mt-3 p-2 from-orange-300 to-red-500">
        <img
          className="w-28 h-28 rounded-lg"
          src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div>
          <p
            className="text-white font-semibold capitalize
          "
          >
            Calculate your <br /> profits
          </p>
          <button className="bg-white text-xs font-semibold mt-5 py-[6px] px-3 rounded-lg flex items-center gap-2">
            Check Now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlreadyHolding;
