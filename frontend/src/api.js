import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Sports
export const fetchSports = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/sports`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching sports:", err.message);
    return null;
  }
};

// News
export const fetchNews = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/news`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching news:", err.message);
    return null;
  }
};

// YouTube
export const fetchYouTube = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/youtube`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching YouTube:", err.message);
    return null;
  }
};

// Stocks
export const fetchStocks = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/stocks`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching stocks:", err.message);
    return [];
  }
};

// Weather
export const fetchWeather = async (lat, lon) => {
  try {
    const res = await axios.get(`${BASE_URL}/weather`, { params: { lat, lon } });
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching weather:", err.message);
    return null;
  }
};

// Save summarized data to DB
export const summarizeData = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/summarize`, data);
    return res.data;
  } catch (err) {
    console.error("❌ Error summarizing data:", err.message);
    return null;
  }
};

// Fetch all summaries from DB
export const fetchSummaries = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/summaries`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching summaries:", err.message);
    return [];
  }
};
