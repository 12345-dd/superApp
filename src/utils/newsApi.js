import axios from "axios";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(
      `https://api.spaceflightnewsapi.net/v4/articles/`
    );

    console.log(response.data.results)
    return response.data.results;
  }catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log(error);
    return [];
  }
};