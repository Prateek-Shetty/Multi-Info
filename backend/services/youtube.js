import axios from "axios";

export const fetchYouTubeTrends = async () => {
  try {
    const res = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "IN", // Change as needed
        maxResults: 5,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    return res.data.items.map((video) => ({
      title: video.snippet.title,
      channel: video.snippet.channelTitle,
      url: `https://www.youtube.com/watch?v=${video.id}`,
    }));
  } catch (err) {
    console.error("❌ Error fetching YouTube trends:", err.message);
    return null;
  }
};
