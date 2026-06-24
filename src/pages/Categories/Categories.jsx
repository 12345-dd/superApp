import "./Categories.css";

import actionImg from "../../assets/action.png";
import dramaImg from "../../assets/drama.png";
import romanceImg from "../../assets/romance.png";
import thrillerImg from "../../assets/thriller.png";
import westernImg from "../../assets/western.png";
import horrorImg from "../../assets/horror.png";
import fantasyImg from "../../assets/fantasy.png";
import musicImg from "../../assets/music.png";
import fictionImg from "../../assets/fiction.png";
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Action",
    color: "#FF5209",
    image: actionImg,
  },
  {
    id: 2,
    name: "Drama",
    color: "#D7A4FF",
    image: dramaImg,
  },
  {
    id: 3,
    name: "Romance",
    color: "#148A08",
    image: romanceImg,
  },
  {
    id: 4,
    name: "Thriller",
    color: "#84C2FF",
    image: thrillerImg,
  },
  {
    id: 5,
    name: "Western",
    color: "#9F3500",
    image: westernImg,
  },
  {
    id: 6,
    name: "Horror",
    color: "#7358FF",
    image: horrorImg,
  },
  {
    id: 7,
    name: "Fantasy",
    color: "#FF4ADE",
    image: fantasyImg,
  },
  {
    id: 8,
    name: "Music",
    color: "#E61E32",
    image: musicImg,
  },
  {
    id: 9,
    name: "Fiction",
    color: "#6CD061",
    image: fictionImg,
  },
];

const Categories = () => {
  const [selectedCategories,setSelectedCategories] = useState([])
  const [error,setError] = useState("")

  const handleCategoryClick = (categoryName) => {
    if(selectedCategories.includes(categoryName)){
      setSelectedCategories(
        selectedCategories.filter(item => item !== categoryName)
      )
    }else{
      setSelectedCategories([
        ...selectedCategories, categoryName
      ])
    }

    setError("")
  }

  const handleNext = () => {
    if(selectedCategories.length < 3){
      setError("Minimum 3 category required")
      return;
    }

    console.log(selectedCategories)
  }

  return (
    <div className="categories-page">
      <div className="left-panel">
        <h1 className="logo">Super app</h1>

        <h2 className="heading">
          Choose your
          <br />
          entertainment
          <br />
          category
        </h2>

        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <span key={category}>
              {category}

              <button 
                type="button" 
                onClick={() => handleCategoryClick(category)}
              >
                X
                </button>
            </span>
          ))}
        </div>

        {error && (
          <p className="error-message">
            &#9888; {error}
          </p>
        )}

      </div>

      <div className="right-panel">
        <div className="cards-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card ${
                selectedCategories.includes(category.name) ? "selected-card" : ""
              }`}
              style={{
                backgroundColor: category.color,
              }}
              onClick = {() => handleCategoryClick(category.name)}
            >
              <h3>{category.name}</h3>

              <img
                src={category.image}
                alt={category.name}
              />
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={handleNext}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Categories;