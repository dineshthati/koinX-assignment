import axios from "axios";
import React, { useContext, useEffect } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { CoinDataContext } from "../config/CoinDataContext";
import { Link } from "react-router-dom";

const TrendingCoins = () => {
  const { trending, setTrending } = useContext(CoinDataContext);

  const fetchTrendingcoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const { data } = response;
      setTrending(data.coins);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingcoins();
  }, []);

  return (
    <div className="bg-white p-2 sm:rounded-lg sm:p-5">
      <p className="capitalize font-semibold text-xl sm:mb-2">
        Trending coins (24h)
      </p>
      {trending.map(
        (coin, index) =>
          index < 3 && (
            <Link to={`/${coin?.item?.id}`} key={coin.name}>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center mt-3 mb-3">
                  <img
                    className="w-6 rounded-full"
                    src={coin?.item?.small}
                    alt=""
                  />
                  <p className="capitalize text-sm ">
                    {coin?.item?.name}
                    <span className="ml-1 ">({coin?.item?.symbol})</span>
                  </p>
                </div>
                <div>
                  <p
                    className={`flex items-center px-1 w-20 text-sm rounded-sm ${
                      coin?.item?.data?.price_change_percentage_24h?.usd < 0
                        ? "bg-red-100 text-red-500"
                        : "bg-[#EBF9F4] text-[#14B079]"
                    }`}
                  >
                    {coin?.item?.data?.price_change_percentage_24h?.usd < 0 ? (
                      <TiArrowSortedDown />
                    ) : (
                      <TiArrowSortedUp />
                    )}
                    {Math.floor(
                      coin?.item?.data?.price_change_percentage_24h?.usd * 10
                    ) / 10}{" "}
                    %
                  </p>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default TrendingCoins;
