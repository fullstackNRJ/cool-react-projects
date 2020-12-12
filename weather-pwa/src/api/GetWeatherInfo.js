export const getWeather = async (query) => {
  try {
    const response = await (await fetch()).json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
