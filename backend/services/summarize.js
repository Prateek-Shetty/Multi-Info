// services/summarize.js

import Together from "../models/togetherModel.js";
import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Make sure this is set in .env

// Function to summarize using Gemini API
const generateSummary = async (sports, news, youtube, stock, weather) => {
  try {
    const prompt = `
      Summarize the following data in a concise, readable format:

      Sports: ${sports}
      News: ${JSON.stringify(news)}
      YouTube: ${JSON.stringify(youtube)}
      Stock: ${JSON.stringify(stock)}
      Weather: ${JSON.stringify(weather)}
    `;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        prompt,
        maxOutputTokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GEMINI_API_KEY}`,
        },
      }
    );

    // Adjust depending on response structure
    return response.data?.candidates?.[0]?.content || "No summary generated";
  } catch (err) {
    console.error("❌ Error generating summary with Gemini:", err.message);
    return "Summary generation failed";
  }
};

// Function to summarize and save data
export const summarizeData = async (data) => {
  try {
    const summary = await generateSummary(
      data.sports,
      data.news,
      data.youtube,
      data.stock,
      data.weather
    );

    const doc = new Together({
      sports: data.sports,
      news: data.news,
      youtube: data.youtube,
      stock: data.stock,
      weather: data.weather,
      summary,
    });

    await doc.save();
    return doc;
  } catch (err) {
    console.error("❌ Error summarizing data:", err.message);
    throw err;
  }
};
