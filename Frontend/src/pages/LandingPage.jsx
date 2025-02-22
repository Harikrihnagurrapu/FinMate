import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Welcome to FinMate</h1>
          <p className="fade-in">Your Ultimate AI-Powered Financial Companion</p>
          <Link to="/signup" className="btn primary-btn fade-in">Get Started</Link>
        </div>
      </header>
      <main>
        <section className="features">
          <h2 className="fade-in">Key Features</h2>
          <div className="feature-cards-container">
            <div className="feature-cards">
              <div className="feature-card fade-in">
                <i className="fas fa-receipt fa-3x"></i>
                <h3>Automated Expense Tracking</h3>
                <p>Effortlessly track your expenses with our AI-powered assistant.</p>
              </div>
              <div className="feature-card fade-in">
                <i className="fas fa-lightbulb fa-3x"></i>
                <h3>Real-Time Financial Insights</h3>
                <p>Get instant insights and personalized budgeting tips.</p>
              </div>
              <div className="feature-card fade-in">
                <i className="fas fa-chart-line fa-3x"></i>
                <h3>Stock Market Predictions</h3>
                <p>Make smarter investments with our stock market prediction tools.</p>
              </div>
              <div className="feature-card fade-in">
                <i className="fas fa-wallet fa-3x"></i>
                <h3>Portfolio Management</h3>
                <p>Track your assets and returns with ease.</p>
              </div>
              <div className="feature-card fade-in">
                <i className="fas fa-credit-card fa-3x"></i>
                <h3>Credit Score Improvement</h3>
                <p>Get recommendations to improve your credit score.</p>
              </div>
              <div className="feature-card fade-in">
                <i className="fas fa-comments fa-3x"></i>
                <h3>Instant Finance Assistance</h3>
                <p>Chat with our AI-powered chatbot for instant financial help.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <h2 className="fade-in">How It Works</h2>
          <div className="steps">
            <div className="step fade-in">
              <h3>Step 1: Sign Up</h3>
              <p>Create your account and set up your financial profile.</p>
            </div>
            <div className="step fade-in">
              <h3>Step 2: Connect Accounts</h3>
              <p>Link your bank accounts and credit cards for real-time tracking.</p>
            </div>
            <div className="step fade-in">
              <h3>Step 3: Get Insights</h3>
              <p>Receive personalized financial insights and recommendations.</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2 className="fade-in">What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card fade-in">
              <p>"FinMate has revolutionized the way I manage my finances. Highly recommend!"</p>
              <h4>- Jane D.</h4>
            </div>
            <div className="testimonial-card fade-in">
              <p>"The stock predictions have been incredibly accurate. I've seen a significant improvement in my investments."</p>
              <h4>- John P.</h4>
            </div>
            <div className="testimonial-card fade-in">
              <p>"The expense tracking feature is a game-changer. It's so easy to use and keeps me on budget."</p>
              <h4>- Lisa M.</h4>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2 className="fade-in">Ready to Take Control of Your Finances?</h2>
          <Link to="/login" className="btn secondary-btn fade-in">Login</Link>
          <Link to="/signup" className="btn primary-btn fade-in">Sign Up</Link>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <p>&copy; 2023 FinMate. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy" className="fade-in">Privacy Policy</a>
            <a href="#terms" className="fade-in">Terms of Service</a>
            <a href="#contact" className="fade-in">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
