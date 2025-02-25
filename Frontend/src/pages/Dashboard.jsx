import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar Navbar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Bar */}
        <TopBar title="Dashboard Overview" />

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* Overview Card */}
            <div className="card expense-tracker">
              <div className="card-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h2>Expense Tracker</h2>
              <p>Track your daily expenses and manage your budget.</p>
              <Link to="/expense-tracker" className="btn primary-btn">
                View Expense
              </Link>
            </div>

            {/* Financial Insights Card */}
            <div className="card financial-insights">
              <div className="card-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h2>Financial Insights</h2>
              <p>Get real-time insights into your spending habits.</p>
              <Link to="/financial-insights" className="btn primary-btn">
                View Insights
              </Link>
            </div>

            {/* Stock Predictions Card */}
            <div className="card stock-predictions">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2>Stock Predictions</h2>
              <p>Predict stock market trends and make smarter investments.</p>
              <Link to="/stock-predictions" className="btn primary-btn">
                View Predictions
              </Link>
            </div>

            {/* Portfolio Management Card */}
            <div className="card portfolio-management">
              <div className="card-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h2>Portfolio Management</h2>
              <p>Track your investments and monitor returns.</p>
              <Link to="/portfolio" className="btn primary-btn">
                View Portfolio
              </Link>
            </div>

            {/* Credit Score Card */}
            <div className="card credit-score">
              <div className="card-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h2>Credit Score</h2>
              <p>Check your credit score and get improvement tips.</p>
              <Link to="/credit-score" className="btn primary-btn">
                View Score
              </Link>
            </div>

            {/* Chatbot Card */}
            <div className="card chatbot">
              <div className="card-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h2>Chatbot</h2>
              <p>Get instant financial assistance from our AI chatbot.</p>
              <Link to="/chatbot" className="btn primary-btn">
                Chat Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
