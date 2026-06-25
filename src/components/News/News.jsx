import { useEffect, useState } from "react";
import "./News.css";
import { getNews } from "../../utils/newsApi";

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  if (!news) {
    return (
      <div className="news-widget">
        Loading News...
      </div>
    );
  }

  const dateObj = new Date(news.publishedAt);

  const date = `${String(
    dateObj.getMonth() + 1
  ).padStart(2, "0")}-${String(
    dateObj.getDate()
  ).padStart(2, "0")}-${dateObj.getFullYear()}`;

  const time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="news-widget">

      <div className="news-image-section">

        <img
          src={news.image}
          alt={news.title}
        />

        <div className="news-overlay">
          <h2>{news.title}</h2>

          <p>
            {date} | {time}
          </p>
        </div>

      </div>

      <div className="news-content">
        {news.description}
      </div>

    </div>
  );
};

export default News;