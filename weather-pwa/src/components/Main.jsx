import React from "react";
import { getWeather } from "../api/GetWeatherInfo";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [query, setQuery] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState({});

 /*  React.useEffect(() => {
    const data = getWeather(query);
    console.log("<><>><>", data);
    setWeatherData(data);
  }, [query]); */

  const performSearch = async (e) => {
    console.log('object,', e)
    if (e.key === "Enter") {
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
     {
     weatherData && <WeatherCard weather={weatherData} />
     }
      </>
  );
};

export default Main;
