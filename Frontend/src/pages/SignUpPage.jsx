import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Import Firebase auth and Firestore
import { useNavigate } from "react-router-dom"; // For navigation
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      // Create a new user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      let profilePictureBase64 = "";
  
      // Convert the profile picture to Base64 if provided
      if (profilePicture) {
        profilePictureBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result.split(",")[1]); // Get the Base64 string
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(profilePicture); // Convert the file to Base64
        });
      }
  
      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        profilePicture: profilePictureBase64, // Store the Base64 string
        createdAt: new Date(),
      });
  
      console.log("User data saved to Firestore:", {
        name,
        email,
        profilePicture: profilePictureBase64,
      }); // Log the saved data
  
      // Redirect to Dashboard on successful signup
      navigate("/dashboard");
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <p>Join us and get started with your journey.</p>
        {error && <p className="error-message">{error}</p>}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn primary-btn">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;