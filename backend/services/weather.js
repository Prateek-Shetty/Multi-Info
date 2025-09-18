import axios from "axios";

export const fetchWeather = async (lat, lon) => {
  try {
    const res = await axios.get(process.env.OPEN_METEO_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
        hourly: "temperature_2m,relative_humidity_2m",
      },
    });

    return res.data.current_weather;
  } catch (err) {
    console.error("❌ Error fetching weather:", err.message);
    return null;
  }
};