import { useState, useEffect } from "react";
import {
  fetchSports,
  fetchNews,
  fetchYouTube,
  fetchStocks,
  fetchWeather,
  summarizeData,
} from "../api.js";

import SportsCard from "../components/Cards/SportsCard";
import NewsCard from "../components/Cards/NewsCard";
import YouTubeCard from "../components/Cards/YouTubeCard";
import StockCard from "../components/Cards/StockCard";
import WeatherCard from "../components/Cards/WeatherCard";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLon(pos.coords.longitude);
      });
    }
  }, []);

  const fetchAllData = async () => {
    if (!lat || !lon) return alert("Location required");
    setLoading(true);
    try {
      const [sports, news, youtube, stock, weather] = await Promise.all([
        fetchSports(),
        fetchNews(),
        fetchYouTube(),
        fetchStocks(),
        fetchWeather(lat, lon),
      ]);
      setData({ sports, news, youtube, stock, weather });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  const handleSummarize = async () => {
    if (!data.sports) return alert("Fetch data first");
    try {
      await summarizeData({ ...data, lat, lon });
      alert("✅ Data summarized and stored!");
    } catch (err) {
      console.error("Error summarizing:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900 drop-shadow-lg">
        📊 Dashboard
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <button
          onClick={fetchAllData}
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-3 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl"
        >
          {loading ? "Fetching..." : "Fetch Data"}
        </button>
        <button
          onClick={handleSummarize}
          className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-3 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl"
        >
          Summarize & Save
        </button>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.sports && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform">
            <SportsCard sports={data.sports.sports} />
          </div>
        )}
        {data.news && (
          <div className="bg-blue-100/80 backdrop-blur-md rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform">
            <NewsCard news={data.news} />
          </div>
        )}
        {data.youtube && (
          <div className="bg-red-100/80 backdrop-blur-md rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform">
            <YouTubeCard youtube={data.youtube} />
          </div>
        )}
        {data.stock && (
          <div className="bg-yellow-100/80 backdrop-blur-md rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform">
            <StockCard stock={data.stock} />
          </div>
        )}
        {data.weather && (
          <div className="bg-indigo-100/80 backdrop-blur-md rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform">
            <WeatherCard weather={data.weather} lat={lat} lon={lon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
