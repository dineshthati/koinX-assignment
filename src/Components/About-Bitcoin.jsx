import React, { useContext } from "react";
import { CoinDataContext } from "../config/CoinDataContext";

const About_Bitcoin = () => {
  const { coinData } = useContext(CoinDataContext);

  return (
    <div className="py-3 px-2 bg-white mt-5 sm:p-5 rounded-lg">
      <h4 className="font-semibold text-xl capitalize sm:text-2xl">
        About {coinData?.name}
      </h4>
      <p className="font-semibold py-2 sm:text-xl sm:mt-3">
        What is {coinData?.name} ?
      </p>

      <p
        className="text-sm sm:text-xl sm:mt-3 sm:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: coinData?.description?.en }}
      ></p>
    </div>
  );
};

export default About_Bitcoin;
