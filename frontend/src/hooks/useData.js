import { useState } from "react";
import { fetchLatestData, summarizeAndSave } from "../api/api";

export const useData = () => {
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const getLatestData = async (lat, lon) => {
    setLoading(true);
    const result = await fetchLatestData(lat, lon);
    setData(result);
    setLoading(false);
  };

  const summarizeData = async () => {
    if (!data) return;
    setLoading(true);
    const result = await summarizeAndSave(data);
    setSummary(result?.summary || "Failed to summarize");
    setLoading(false);
  };

  return { data, summary, loading, getLatestData, summarizeData };
};
