import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the logout icon
import "../styles/Topbar.css";

const TopBar = ({ title }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
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
              src={`data:image/jpeg;base64,${userData.profilePicture}`}
              alt="User Profile"
              className="profile-image"
            />
          )}
          <span className="username">{userData?.name || "User"}</span>
          <FontAwesomeIcon
            icon={faSignOutAlt} // Use the logout icon
            className="logout-icon"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;