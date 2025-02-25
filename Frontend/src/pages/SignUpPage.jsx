import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        // profilePicture: "", // You can add a default URL or allow users to upload a picture
      });

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleGoogleSignUp = async () => {
  //   try {
  //     const userCredential = await signInWithPopup(auth, googleProvider);
  //     const user = userCredential.user;

  //     // Store additional user data in Firestore
  //     await setDoc(doc(db, "users", user.uid), {
  //       name: user.displayName,
  //       email: user.email,
  //       profilePicture: user.photoURL,
  //     });

  //     navigate("/dashboard");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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
          <button type="submit" className="btn primary-btn">
            Sign Up
          </button>
        </form>
        {/* <button className="btn google-btn" onClick={handleGoogleSignUp}>
          <i className="fab fa-google"></i> Sign Up with Google
        </button> */}
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
