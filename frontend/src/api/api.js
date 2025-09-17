import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const fetchLatestData = async (lat, lon) => {
  try {
    const res = await axios.get(`${API_BASE}/together`, { params: { lat, lon } });
    return res.data;
  } catch (err) {
    console.error("Error fetching latest data:", err);
    return null;
  }
};

export const summarizeAndSave = async (data) => {
  try {
    const res = await axios.post(`${API_BASE}/summarize`, data);
    return res.data;
  } catch (err) {
    console.error("Error summarizing data:", err);
    return null;
  }
};
