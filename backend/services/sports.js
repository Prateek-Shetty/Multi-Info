import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  temperature: 0.7, // optional: more controlled output
});

export const fetchSportsNews = async () => {
  try {
    const prompt = `
Generate 5 latest sports headlines and summaries. 
`;

    const response = await model.generateContent(prompt);
    const text = response.response.text(); // raw text output from Gemini

    return { sports: text, summary: "AI-generated sports news via Gemini." };
  } catch (err) {
    console.error("❌ Error fetching sports from Gemini:", err.message);
    return { sports: "Error fetching sports news", summary: "Check your Gemini API key." };
  }
};
