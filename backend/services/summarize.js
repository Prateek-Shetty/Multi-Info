import dotenv from "dotenv";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Together from "../models/Together.js";

dotenv.config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", temperature: 0.7 });

// Connect to MongoDB (if not connected in server.js)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected in summarize.js"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));

export const summarizeAndSave = async (data) => {
  try {
    const prompt = `
Create a concise daily digest summary from the following data:
Sports: ${JSON.stringify(data.sports)}
News: ${JSON.stringify(data.news)}
YouTube: ${JSON.stringify(data.youtube)}
Stock: ${JSON.stringify(data.stock)}
Weather: ${JSON.stringify(data.weather)}
Return a short human-readable summary.
`;

    const summaryResponse = await model.generateContent(prompt);
    const summaryText = summaryResponse.response.text();

    // Save to MongoDB
    const doc = new Together({ ...data, summary: summaryText });
    await doc.save();

    return doc;
  } catch (err) {
    console.error("❌ Error summarizing and saving:", err.message);
    return { error: "Failed to summarize and save" };
  }
};
