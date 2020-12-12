import React from "react";
import { getWeather } from "../api/GetWeatherInfo";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [query, setQuery] = React.useState("");
  const [weatherData, setWeatherData] = React.useState({});

  const performSearch = async (e) => {
    if (e.key === "enter ") {
      const data = await getWeather(query);
      setWeatherData(data);
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="input-bar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={performSearch}
        />
      </div>
      <WeatherCard weather={weatherData} />
    </>
  );
};

export default Main;
