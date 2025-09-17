import axios from "axios";

export const fetchNews = async () => {
  try {
    const res = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        language: "en",
        pageSize: 5,
        apiKey: process.env.NEWSAPI_KEY,
      },
    });

    const articles = res.data.articles.map((a) => ({
      title: a.title,
      source: a.source.name,
    }));

    return articles;
  } catch (err) {
    console.error("❌ Error fetching news:", err.message);
    return null;
  }
};
