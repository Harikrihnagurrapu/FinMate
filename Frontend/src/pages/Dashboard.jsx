import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to FinMate</h1>
      <div className="dashboard-grid">
        <div className="card expense-tracker">
          <h2>Expense Tracker</h2>
          {/* Add expense tracking UI here */}
        </div>
        <div className="card financial-insights">
          <h2>Financial Insights</h2>
          {/* Add financial insights UI here */}
        </div>
        <div className="card stock-predictions">
          <h2>Stock Predictions</h2>
          {/* Add stock predictions UI here */}
        </div>
        <div className="card portfolio-management">
          <h2>Portfolio Management</h2>
          {/* Add portfolio management UI here */}
        </div>
        <div className="card credit-score">
          <h2>Credit Score Predictions</h2>
          {/* Add credit score UI here */}
        </div>
        <div className="card chatbot">
          <h2>Chatbot</h2>
          {/* Add chatbot UI here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;