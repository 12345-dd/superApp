import React from 'react'
import "./Dashboard.css";

import UserCard from "../../components/UserCard/UserCard";
import Notes from '../../components/Notes/Notes';
import Weather from '../../components/Weather/Weather';
import News from '../../components/News/News';

const Dashboard = () => {
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
          Timer Widget
        </div>

        <button className="browse-btn">
          Browse
        </button>
      </div>
    </div>
  );
};

export default Dashboard;