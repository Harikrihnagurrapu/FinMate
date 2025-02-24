import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
// import Signup from "./pages/Signup";
import SignUpPage from "./pages/SignUpPage";
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
