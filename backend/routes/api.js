import express from "express";
import { generateAllData } from "../services/together.js";
import { summarizeAndSave } from "../services/summarize.js";

const router = express.Router();

// GET all API data
router.get("/together", async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const data = await generateAllData(lat, lon);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching all data:", err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// POST summarize & save
router.post("/summarize", async (req, res) => {
  try {
    const data = req.body; // frontend sends the combined data
    const result = await summarizeAndSave(data);
    res.json(result);
  } catch (err) {
    console.error("❌ Error summarizing data:", err.message);
    res.status(500).json({ error: "Failed to summarize and save" });
  }
});

export default router;
