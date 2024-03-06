export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%20%2Cusd&include_24hr_change=true`;

export const TrendingApi = () =>
  `https://api.coingecko.com/api/v3/search/trending
`;
