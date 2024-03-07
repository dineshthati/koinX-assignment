import React, { createContext, useState } from "react";

export const CoinDataContext = createContext();

export const CoinDataProvider = ({ children }) => {
  const [coinData, setCoinData] = useState({});
  const [trending, setTrending] = useState([]);

  return (
    <CoinDataContext.Provider
      value={{ coinData, setCoinData, trending, setTrending }}
    >
      {children}
    </CoinDataContext.Provider>
  );
};
