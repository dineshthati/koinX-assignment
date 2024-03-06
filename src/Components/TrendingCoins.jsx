import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
// import { Trending } from "../config/Api";

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);
  const fetchTrendingcoins = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((r) => {
        const { data } = r;

        setTrending(data.coins);
        // console.log(data.coins);
        // console.log(trending);
      });
  };

  useEffect(() => {
    fetchTrendingcoins();
  }, []);

  return (
    <div className="bg-white  p-2">
      <p className="capitalize font-semibold text-xl">Trending coins (24h)</p>
      <div className="flex items-center justify-between "></div>
      {trending.map((coin) => {
        return (
          <div
            key={coin.coin_id}
            className="flex items-center justify-between "
          >
            <div className="flex gap-1 items-center mt-3 mb-3">
              <img
                className="w-6 rounded-full"
                src={coin?.item?.small}
                alt=""
              />
              <p className="capitalize text-sm  ">
                {coin?.item?.name}
                <span className="ml-1">({coin?.item?.symbol})</span>
              </p>
            </div>
            <div>
              <p className="flex items-center bg-green-100 text-green-500 px-1 rounded-sm">
                <TiArrowSortedUp />
                {Math.floor(
                  coin?.item?.data?.price_change_percentage_24h?.usd * 10
                ) / 10}{" "}
                %
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCoins;
