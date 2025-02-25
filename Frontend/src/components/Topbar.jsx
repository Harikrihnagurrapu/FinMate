import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../styles/Topbar.css";

const TopBar = ({ title }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No such document!");
        }
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="top-bar">Loading...</div>; // Show loading state
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h1>{title}</h1>
      </div>
      <div className="top-bar-right">
        <div className="user-profile">
          {userData?.profilePicture && (
            <img
            src={
              userData?.profilePicture
                ? `data:image/jpeg;base64,${userData.profilePicture}`
                : "../assets/user-img.jpg" // Add a default image
            }
            alt="User Profile"
            className="profile-image"
          />
          )}
          <span className="username">{userData?.name || "User"}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;