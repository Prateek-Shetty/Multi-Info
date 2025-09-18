# 🌐 AI-Powered Dashboard

An interactive full-stack dashboard that fetches **sports, news, YouTube videos, stock market data, and weather updates** – and then summarizes + stores everything in a database using AI.

## 🚀 Features

- 📊 **Dashboard View**: Sports, News, YouTube, Stocks, and Weather data in one place.  
- 🤖 **AI Summarization**: Summarize fetched data via AI and save it to DB.  
- 💾 **Saved Summaries**: View previously stored summaries in a clean collapsible UI.  
- 🎨 **Modern UI**: Built with React + TailwindCSS for a responsive, beautiful design.  
- ⚡ **Backend API**: Node.js + Express serving unified routes for data fetching.  
- 🗄️ **Database**: MongoDB for storing summaries.  

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router
- TailwindCSS  

**Backend**
- Node.js + Express  
- Axios (for API calls)  
- MongoDB (Mongoose for models)  

**AI**
- Gemini API (Google Generative AI) – used for summarization  

---

## ⚙️ Environment Variables

You’ll need a `.env` file in your backend directory with:

```bash
# === Backend Keys ===
PORT=5000
MONGO_URI=your_mongodb_connection_string

# === Weather API ===
WEATHER_API_KEY=your_openweathermap_key

# === Sports API ===
SPORTSDB_API_KEY=your_thesportsdb_key

# === News API ===
NEWS_API_KEY=your_newsapi_key

# === YouTube API ===
YOUTUBE_API_KEY=your_youtube_data_api_key

# === Stocks API ===
ALPHAVANTAGE_API_KEY=your_alphavantage_key

# === AI ===
GEMINI_API_KEY=your_gemini_api_key


