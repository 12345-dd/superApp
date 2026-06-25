import axios from "axios";

const API_KEY = "f44d020b70bf261f46531a2263760fca";

export const getNews = async () => {
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${API_KEY}`
  );

  return response.data.articles[0];
};