import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect Mongo (optional if already connected in summarize.js)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));

// Routes
app.use("/api", apiRoutes);

// Test route
app.get("/", (req, res) => res.send("🚀 AI Agent Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
