//API URL and key:
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const API_KEY = "353918b8843649fff41007a6c16c01e6";

export const getWeather = async (query) => {
  try {
    if (query) {
      const finalURL = URL + `appid=${API_KEY}&q=${query}`;
      const response = await (await fetch(finalURL)).json();
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
