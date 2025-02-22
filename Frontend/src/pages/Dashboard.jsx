import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to FinMate</h1>
      <div className="dashboard-grid">
        {/* Expense Tracker Card */}
        <div className="card expense-tracker">
          <h2>Expense Tracker</h2>
          <p>Track your daily expenses and manage your budget.</p>
          <button className="btn primary-btn">View Expenses</button>
        </div>

        {/* Financial Insights Card */}
        <div className="card financial-insights">
          <h2>Financial Insights</h2>
          <p>Get real-time insights into your spending habits.</p>
          <button className="btn primary-btn">View Insights</button>
        </div>

        {/* Stock Predictions Card */}
        <div className="card stock-predictions">
          <h2>Stock Predictions</h2>
          <p>Predict stock market trends and make smarter investments.</p>
          <button className="btn primary-btn">View Predictions</button>
        </div>

        {/* Portfolio Management Card */}
        <div className="card portfolio-management">
          <h2>Portfolio Management</h2>
          <p>Track your investments and monitor returns.</p>
          <button className="btn primary-btn">View Portfolio</button>
        </div>

        {/* Credit Score Card */}
        <div className="card credit-score">
          <h2>Credit Score</h2>
          <p>Check your credit score and get improvement tips.</p>
          <button className="btn primary-btn">View Score</button>
        </div>

        {/* Chatbot Card */}
        <div className="card chatbot">
          <h2>Chatbot</h2>
          <p>Get instant financial assistance from our AI chatbot.</p>
          <button className="btn primary-btn">Chat Now</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;