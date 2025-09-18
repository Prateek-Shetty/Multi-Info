import yahooFinance from "yahoo-finance2";

export const fetchStockData = async (symbol = "AAPL") => {
  try {
    const result = await yahooFinance.quote(symbol);
    return {
      symbol,
      price: result.regularMarketPrice,
      open: result.regularMarketOpen,
      high: result.regularMarketDayHigh,
      low: result.regularMarketDayLow,
      previousClose: result.regularMarketPreviousClose,
      currency: result.currency,
    };
  } catch (err) {
    console.error("❌ Error fetching stock:", err.message);
    return null;
  }
};
