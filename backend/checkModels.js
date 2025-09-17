import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

const listModels = async () => {
  try {
    const res = await axios.get("https://generativelanguage.googleapis.com/v1beta/models", {
      headers: {
        "X-goog-api-key": API_KEY
      }
    });
    console.log("Available models:", res.data);
  } catch (err) {
    console.error("Error listing models:", err.response?.data || err.message);
  }
};

listModels();
