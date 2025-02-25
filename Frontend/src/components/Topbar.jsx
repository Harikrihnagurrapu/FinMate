import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth"; // Import signOut from Firebase auth
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../styles/Topbar.css";

const TopBar = ({ title }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser; // Get the current user
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid)); // Fetch user data
        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Set user data in state
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h1>{title}</h1>
      </div>
      <div className="top-bar-right">
        <div className="user-profile">
          {userData?.profilePicture && (
            <img
              src={`data:image/jpeg;base64,${userData.profilePicture}`} // Display Base64 image
              alt="User Profile"
              className="profile-image"
            />
          )}
          <span className="username">{userData?.name || "User"}</span>
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;