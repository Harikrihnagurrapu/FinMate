import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          FinMate
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/expense-tracker" className="navbar-link">
          Expense Tracker
        </Link>
        <Link to="/stock-predictions" className="navbar-link">
          Stock Predictions
        </Link>
        <Link to="/portfolio" className="navbar-link">
          Portfolio
        </Link>
        <Link to="/credit-score" className="navbar-link">
          Credit Score
        </Link>
        <Link to="/chatbot" className="navbar-link">
          Chatbot
        </Link>
      </div>
      <div className="navbar-actions">
        <button className="btn primary-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;