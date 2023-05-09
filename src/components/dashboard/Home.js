import React from 'react';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-welcome">
          <h1>Welcome to Quacktice Test</h1>
          <p className="welcome-message">
            Your one-stop platform to practice and test your knowledge across various technical skills.
          </p>
        </div>
      </div>
      <div className="stats">
        <div className="stats-card">
          <p>
            You have completed <strong>15 quizzes</strong> so far, with an
            average score of <strong>80%</strong>. Keep up the great work!
          </p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>Recently Played Quizzes</h3>
          <ul>
            <li>Technical Interview Prep</li>
            <li>Problem Solving Challenges</li>
            <li>Algorithms and Data Structures</li>
          </ul>
        </div>
        <div className="card">
          <h3>Top Quizzes</h3>
          <ul>
            <li>Advanced JavaScript</li>
            <li>Python for Data Science</li>
            <li>SQL Fundamentals</li>
          </ul>
        </div>
        <div className="card">
          <h3>Recommended Quizzes</h3>
          <ul>
            <li>ReactJS Best Practices</li>
            <li>Machine Learning Basics</li>
            <li>HTML & CSS Fundamentals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
