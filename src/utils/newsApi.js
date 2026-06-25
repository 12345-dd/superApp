import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${API_KEY}`
    );

    console.log("API Response:", response.data);

    return response.data.articles;
  } catch (error) {
    console.log("News API Error:", error);
    return [];
  }
};