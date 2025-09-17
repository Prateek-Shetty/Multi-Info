import axios from "axios";

export const fetchStockData = async (symbol = "AAPL") => {
  try {
    const res = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: process.env.ALPHAVANTAGE_API_KEY,
      },
    });

    const data = res.data["Time Series (Daily)"];
    if (!data) return null;

    const latestDate = Object.keys(data)[0];
    const latest = data[latestDate];

    return {
      symbol,
      date: latestDate,
      open: latest["1. open"],
      high: latest["2. high"],
      low: latest["3. low"],
      close: latest["4. close"],
    };
  } catch (err) {
    console.error("❌ Error fetching stock:", err.message);
    return null;
  }
};
