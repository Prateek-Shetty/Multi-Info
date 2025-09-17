import { fetchSportsNews } from "./sports.js";
import { fetchNews } from "./news.js";
import { fetchYouTubeTrends } from "./youtube.js";
import { fetchStockData } from "./stock.js";
import { fetchWeather } from "./weather.js";

export const generateAllData = async (lat, lon) => {
  try {
    const [sports, news, youtube, stock, weather] = await Promise.all([
      fetchSportsNews(),
      fetchNews(),
      fetchYouTubeTrends(),
      fetchStockData("AAPL"), // make dynamic if needed
      fetchWeather(lat, lon)
    ]);

    return { sports, news, youtube, stock, weather };
  } catch (err) {
    console.error("❌ Error in generateAllData:", err.message);
    return { sports: null, news: null, youtube: null, stock: null, weather: null };
  }
};
