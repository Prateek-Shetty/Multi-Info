import express from "express";
import { fetchSportsNews } from "../services/sports.js";
import { fetchNews } from "../services/news.js";
import { fetchYouTubeTrends } from "../services/youtube.js";
import { fetchStockData } from "../services/stock.js";
import { fetchWeather } from "../services/weather.js";
import { summarizeData } from "../services/summarize.js";
import Together from "../models/togetherModel.js"; 

const router = express.Router();

// --- LIVE DATA FETCHERS ---

// Sports
router.get("/sports", async (req, res) => {
  try {
    const sports = await fetchSportsNews();
    res.json(sports);
  } catch (err) {
    console.error("❌ Error fetching sports:", err.message);
    res.status(500).json({ error: "Error fetching sports" });
  }
});

// News
router.get("/news", async (req, res) => {
  try {
    const news = await fetchNews();
    res.json(news);
  } catch (err) {
    console.error("❌ Error fetching news:", err.message);
    res.status(500).json({ error: "Error fetching news" });
  }
});

// YouTube
router.get("/youtube", async (req, res) => {
  try {
    const youtube = await fetchYouTubeTrends();
    res.json(youtube);
  } catch (err) {
    console.error("❌ Error fetching YouTube:", err.message);
    res.status(500).json({ error: "Error fetching YouTube" });
  }
});

// Weather
router.get("/weather", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const data = await fetchWeather(lat, lon);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching weather:", err.message);
    res.status(500).json({ error: "Error fetching weather" });
  }
});

// Stocks
const stockSymbols = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"];
router.get("/stocks", async (req, res) => {
  try {
    const promises = stockSymbols.map(symbol => fetchStockData(symbol));
    const stocks = await Promise.all(promises);
    res.json(stocks);
  } catch (err) {
    console.error("❌ Error fetching stocks:", err.message);
    res.status(500).json({ error: "Failed to fetch stocks" });
  }
});

// --- DB OPERATIONS ---

// Summarize & save to DB
router.post("/summarize", async (req, res) => {
  try {
    const data = req.body; // Expect all API data from frontend
    const summary = await summarizeData(data);
    res.json(summary);
  } catch (err) {
    console.error("❌ Error summarizing:", err.message);
    res.status(500).json({ error: "Error summarizing data" });
  }
});

// Fetch all summaries from DB
router.get("/summaries", async (req, res) => {
  try {
    const summaries = await Together.find().sort({ createdAt: -1 });
    res.json(summaries);
  } catch (err) {
    console.error("❌ Error fetching summaries:", err.message);
    res.status(500).json({ error: "Failed to fetch summaries" });
  }
});

export default router;
