import React from "react";
import blogging from "../../assets/blogging.png";
import growth from "../../assets/growth.png";

const Cards_keyEvents = () => {
  return (
    <>
      <div className=" bg-[#E8F4FD] min-w-[75vw]  sm:min-w-[480px] sm:h-56 sm:p-5  rounded-lg  flex flex-col gap-2 sm:gap-0">
        <div className="flex gap-2">
          <img className="w-7 rounded-full sm:w-10" src={blogging} alt="" />
          <p className="text-xs font-semibold text-black/[0.8] sm:text-sm sm:ml-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <p className="text-[10px] ml-9 text-[#65707e] mb-3 sm:text-sm sm:ml-14 sm:leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            vitae autem cupiditate adipisci inventore ratione illum eveniet
            beatae, magnam odit natus consectetur sunt nihil corporis?
          </p>
        </div>
      </div>
      <div className=" bg-[#EBF9F4] min-w-[75vw] sm:min-w-[480px] sm:h-56 sm:p-5  p-2 rounded-lg  flex flex-col gap-2">
        <div className="flex gap-2">
          <img className="w-7 rounded-full sm:w-10" src={growth} alt="" />
          <p className="text-xs font-semibold text-black/[0.7] sm:text-sm sm:ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <p className="text-[10px] ml-9 text-[#65707e] mb-3 sm:text-sm sm:ml-14 sm:leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            vitae autem cupiditate adipisci inventore ratione illum eveniet
            beatae, magnam odit natus consectetur sunt nihil corporis?
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards_keyEvents;
