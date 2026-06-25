import axios from "axios";

const API_KEY = "e31109d3ef831040311cbb2ecfce3c3e";

export const getWeather = async (city = "Surat") => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  return response.data;
};