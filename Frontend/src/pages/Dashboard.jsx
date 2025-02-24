import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="dashboard">
      {/* Sidebar Navbar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-brand">
          <h2>FinMate</h2>
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? "✕" : "☰"}
          </button>
        </div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="sidebar-link active">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
          <a href="/expense-tracker" className="sidebar-link">
            <i className="fas fa-wallet"></i>
            <span>Expense Tracker</span>
          </a>
          <a href="/stock-predictions" className="sidebar-link">
            <i className="fas fa-chart-line"></i>
            <span>Stock Predictions</span>
          </a>
          <a href="/portfolio" className="sidebar-link">
            <i className="fas fa-coins"></i>
            <span>Portfolio</span>
          </a>
          <a href="/credit-score" className="sidebar-link">
            <i className="fas fa-credit-card"></i>
            <span>Credit Score</span>
          </a>
          <a href="/chatbot" className="sidebar-link">
            <i className="fas fa-robot"></i>
            <span>Chatbot</span>
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-left">
            {/* <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              ☰
            </button> */}
            <h1>Dashboard</h1>
          </div>
          <div className="top-bar-right">
            <div className="user-profile">
              <img
                src="../assets/user-img.jpg"
                alt="User Profile"
                className="profile-image"
              />
              <span className="username">John Doe</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* Expense Tracker Card */}
            <div className="card expense-tracker">
              <div className="card-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h2>Expense Tracker</h2>
              <p>Track your daily expenses and manage your budget.</p>
              <button className="btn primary-btn">View Expenses</button>
            </div>

            {/* Financial Insights Card */}
            <div className="card financial-insights">
              <div className="card-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h2>Financial Insights</h2>
              <p>Get real-time insights into your spending habits.</p>
              <button className="btn primary-btn">View Insights</button>
            </div>

            {/* Stock Predictions Card */}
            <div className="card stock-predictions">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2>Stock Predictions</h2>
              <p>Predict stock market trends and make smarter investments.</p>
              <button className="btn primary-btn">View Predictions</button>
            </div>

            {/* Portfolio Management Card */}
            <div className="card portfolio-management">
              <div className="card-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h2>Portfolio Management</h2>
              <p>Track your investments and monitor returns.</p>
              <button className="btn primary-btn">View Portfolio</button>
            </div>

            {/* Credit Score Card */}
            <div className="card credit-score">
              <div className="card-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h2>Credit Score</h2>
              <p>Check your credit score and get improvement tips.</p>
              <button className="btn primary-btn">View Score</button>
            </div>

            {/* Chatbot Card */}
            <div className="card chatbot">
              <div className="card-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h2>Chatbot</h2>
              <p>Get instant financial assistance from our AI chatbot.</p>
              <button className="btn primary-btn">Chat Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
