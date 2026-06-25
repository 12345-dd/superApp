import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieSection.css";
import genreMap from "../../utils/genreMap";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const MovieSection = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    try {
      const genreId = genreMap[category];

      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: API_KEY,
            with_genres: genreId,
            language: "en-US",
            sort_by: "popularity.desc",
            page: 1
          }
        }
      );
      console.log(response.data.results)
      setMovies(response.data.results.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="movie-section">
        <h2>{category}</h2>

        <div className="movies-row">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="movie-card"
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                    />

                    <div className="movie-overlay">
                        <p>{movie.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default MovieSection;