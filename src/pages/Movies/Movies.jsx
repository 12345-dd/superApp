import React from 'react'
import "./Movies.css";
import { useSelector } from "react-redux";
import MovieSection from "../../components/MovieSection/MovieSection";
import userImg from "../../assets/user.png";

const Movies = () => {
  const categories = useSelector((state) => state.category.selectedCategories);

  return (
    <div className="movies-page">
      <div className="movies-header">
        <div>
          <h1>Super app</h1>
          <p>Entertainment according to your choice</p>
        </div>

        <img
          src={userImg}
          alt="profile"
          className="profile-icon"
        />
      </div>

      {categories.map((category) => (
        <MovieSection
          key={category}
          category={category}
        />
      ))}
    </div>
  );
};

export default Movies;