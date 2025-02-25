import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
// import Signup from "./pages/Signup";
import SignUpPage from "./pages/SignUpPage";
import ExpenseTracker from "./pages/ExpenseTracker";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import ProfileSettings from "./pages/ProfileSettings"; // Import ProfileSettings

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile-settings"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
