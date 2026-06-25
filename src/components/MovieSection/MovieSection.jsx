import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieSection.css";
import "./MovieModal.css"
import genreMap from "../../utils/genreMap";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const MovieSection = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

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
    <>
        <div className="movie-section">
            <h2>{category}</h2>

            <div className="movies-row">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="movie-card"
                        onClick={() => setSelectedMovie(movie)}
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
        {selectedMovie && (
            <div
                className="movie-modal-overlay"
                onClick={() => setSelectedMovie(null)}
            >
                <div
                    className="movie-modal"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w780${selectedMovie.backdrop_path}`}
                        alt={selectedMovie.title}
                    />

                    <h2>{selectedMovie.title}</h2>

                    <p>
                        ⭐ {selectedMovie.vote_average.toFixed(1)}
                    </p>

                    <p>{selectedMovie.release_date}</p>

                    <p>{selectedMovie.overview}</p>

                    <button onClick={() => setSelectedMovie(null)}>
                        Close
                    </button>
                </div>
            </div>
        )}
    </>
  );
};

export default MovieSection;