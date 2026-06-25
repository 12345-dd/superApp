import React from 'react'
import "./Dashboard.css";

import UserCard from "../../components/UserCard/UserCard";
import Notes from '../../components/Notes/Notes';
import Weather from '../../components/Weather/Weather';
import News from '../../components/News/News';
import Timer from '../../components/Timer/Timer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
   const navigate = useNavigate()

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="left-section">
          <UserCard />

          <div className="weather-card">
            <Weather />
          </div>
        </div>

        <div className='notes-wrapper'>
          <Notes />
        </div>

        <div className="news-card">
          <News />
        </div>

        <div className="timer-card">
          <Timer />
        </div>

        <button 
          className="browse-btn"
          onClick={() => navigate("/movies")}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default Dashboard;