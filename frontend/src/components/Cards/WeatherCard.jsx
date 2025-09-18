const WeatherCard = ({ weather, lat, lon }) => {
  if (!weather) return null;

  return (
    <div className="border p-4 rounded bg-cyan-50">
      <h2 className="font-bold text-lg mb-2">Weather</h2>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Direction: {weather.winddirection}°</p>
      <p>Day: {weather.is_day ? "Yes" : "No"}</p>
      <p>Code: {weather.weathercode}</p>
    </div>
  );
};

export default WeatherCard;
