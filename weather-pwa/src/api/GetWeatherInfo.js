//API URL and key:
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "353918b8843649fff41007a6c16c01e6";

export const getWeather = async (query) => {
  try {
    const response = await (
      await fetch(URL, {
        params: {
          q: query,
          units: "metric",
          APPID: API_KEY,
        },
      })
    ).json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
