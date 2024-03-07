import React, { useContext } from "react";
import { CoinDataContext } from "../config/CoinDataContext";
import { Link } from "react-router-dom";

const YouMAyAlsoLike = () => {
  const { trending, coinData } = useContext(CoinDataContext);

  return (
    <div className="bg-white p-2 sm:p-5 sm:px-7 sm:mt-16 ">
      <p className="capitalize pt-3 pb-1 px-2 font-semibold text-base  sm:text-xl">
        you may also like
      </p>
      <div className="card-scrollbar overflow-x-scroll flex gap-2">
        {trending.map((coin) => {
          return (
            <Link to={`/${coin?.item?.id}`} key={coin?.item?.coin_id}>
              <div className="sm:min-w-72 sm:h-48 border-[1px] border-gray-300 sm:px-4 sm:py-2 rounded-lg min-w-40 w-40">
                <div className="flex p-3 items-center gap-1 sm:gap-2 ">
                  <img
                    className="w-4 sm:w-7 object-contain rounded-full"
                    src={coin?.item?.small}
                  />
                  <p className="text-[9px] sm:text-xl">{coin?.item?.name}</p>
                  <p className="text-green-500 text-[7px] sm:text-sm bg-[#EBF9F4] ">
                    {coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                      2
                    )}
                    %
                  </p>
                </div>
                <p className="text-xs ml-3 leading-none sm:text-xl">
                  {coin?.item?.data?.price}
                </p>

                <img
                  className="w-28 ml-3 sm:w-44"
                  src={coin?.item?.data?.sparkline}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default YouMAyAlsoLike;
