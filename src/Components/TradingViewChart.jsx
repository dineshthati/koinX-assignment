import React, { useEffect, useRef, memo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TradingViewWidget() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState([]);
  const container = useRef(null);
  const scriptRef = useRef(null);

  const fetchCoinData = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?community_data=true&developer_data=false&sparkline=true`
      )
      .then((res) => {
        const { data } = res;
        setCoinData(data);
        console.log(data);
        console.log(coinData);
      });
  };

  useEffect(() => {
    fetchCoinData();
  }, [coinId]);

  useEffect(() => {
    if (coinData && coinData.symbol) {
      const script = document.createElement("script");
      const uppercaseCoinSymbol = coinData.symbol.toUpperCase();
      console.log(uppercaseCoinSymbol);

      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{ "autosize": true, "symbol": "COINBASE:${uppercaseCoinSymbol}USD", "interval": "D", "timezone": "Etc/UTC", "theme": "light", "style": "3", "locale": "en", "enable_publishing": false, "backgroundColor": "rgba(255, 255, 255, 1)", "hide_legend": true, "save_image": false, "calendar": false, "hide_volume": true, "support_host": "https://www.tradingview.com" }`;

      scriptRef.current = script;
      container.current.appendChild(script);
    }

    return () => {
      if (
        scriptRef.current &&
        scriptRef.current.parentNode === container.current
      ) {
        container.current.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [coinData]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
