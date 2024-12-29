// src/components/Homepage.js
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./hero-image.jpg"; // Import the hero image
import "./homepage.css";

const Homepage = () => {
  const redirectToStreamlit = () => {
    window.location.href = "http://localhost:8501"; // Replace with your Streamlit URL
  };

  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">SHECONNECT</h1>
        <p className="subtitle">Empowering Women Through Accessibility</p>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={heroImage} // Use the imported image
          alt="Empowering Women"
          className="hero-image"
        />
        <div className="hero-text">
          <h2 className="intro">Welcome to SHECONNECT</h2>
          <p className="intro-sub">Explore schemes and opportunities tailored to empower women.</p>
          <button onClick={redirectToStreamlit} className="button primary">
            CHATBOT
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="category-section">
        <h2 className="section-title">Explore Categories</h2>
        <div className="buttons-container">
          <button className="button primary">Women's Schemes</button>
          <Link to="/category/Personal" className="button primary">
            Personal Finance
          </Link>
          <button className="button primary">Loan Form</button>
        </div>
      </div>

      {/* Popular Schemes Section */}
      <div className="schemes-grid">
        <h2 className="section-title">Popular Schemes</h2>
        <div className="buttons-grid">
          <Link to="/agriculture" className="button scheme-btn">
            <h3>Agriculture, Rural & Environment</h3>
            <p>372 Schemes</p>
          </Link>
          <Link to="/category/Banking-Financial-Services" className="button scheme-btn">
            <h3>Banking, Financial Services And Insurance</h3>
            <p>211 Schemes</p>
          </Link>
          <Link to="/category/Education-Learning" className="button scheme-btn">
            <h3>Education & Learning</h3>
            <p>699 Schemes</p>
          </Link>
          <Link to="/category/Health-Wellness" className="button scheme-btn">
            <h3>Health & Wellness</h3>
            <p>193 Schemes</p>
          </Link>
          <Link to="/category/Business-Entrepreneurship" className="button scheme-btn">
            <h3>Business & Entrepreneurship</h3>
            <p>127 Schemes</p>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="actions-container">
          <button className="button secondary">View All</button>
          <button className="button primary login-btn">Login/Register</button>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
