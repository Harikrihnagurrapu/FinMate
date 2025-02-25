import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-brand">
        <h2>FinMate</h2>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/expense-tracker" className={`sidebar-link ${location.pathname === '/expense-tracker' ? 'active' : ''}`}>
          <i className="fas fa-wallet"></i>
          <span>Expense Tracker</span>
        </Link>
        <Link to="/stock-predictions" className={`sidebar-link ${location.pathname === '/stock-predictions' ? 'active' : ''}`}>
          <i className="fas fa-chart-line"></i>
          <span>Stock Predictions</span>
        </Link>
        <Link to="/portfolio" className={`sidebar-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
          <i className="fas fa-coins"></i>
          <span>Portfolio</span>
        </Link>
        <Link to="/credit-score" className={`sidebar-link ${location.pathname === '/credit-score' ? 'active' : ''}`}>
          <i className="fas fa-credit-card"></i>
          <span>Credit Score</span>
        </Link>
        <Link to="/chatbot" className={`sidebar-link ${location.pathname === '/chatbot' ? 'active' : ''}`}>
          <i className="fas fa-robot"></i>
          <span>Chatbot</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
