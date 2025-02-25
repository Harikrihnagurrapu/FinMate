import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileSettings.module.css";

const ProfileSettings = () => {
  const [userData, setUserData] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setName(userDoc.data().name); // Set the name from Firestore
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not logged in.");

      // Upload the new profile picture to Firebase Storage
      const storageRef = ref(storage, `profilePictures/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Update the user's profile picture in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        profilePicture: downloadURL,
      });

      // Update the local state to reflect the new profile picture
      setUserData((prevData) => ({
        ...prevData,
        profilePicture: downloadURL,
      }));

      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error updating profile picture:", error);
      alert("Failed to update profile picture.");
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not logged in.");

      // Update the user's name in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        name: name,
      });

      alert("Name updated successfully!");
    } catch (error) {
      console.error("Error updating name:", error);
      alert("Failed to update name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-settings">
      <h1>Profile Settings</h1>
      <div className="profile-picture-section">
        <h2>Profile Picture</h2>
        {userData?.profilePicture && (
          <label htmlFor="profile-picture-input" className="profile-picture-label">
            <img
              src={userData.profilePicture}
              alt="User Profile"
              className="profile-image"
            />
            <span className="edit-icon">✏️</span>
          </label>
        )}
        <input
          type="file"
          id="profile-picture-input"
          accept="image/*"
          onChange={handleProfilePictureChange}
          style={{ display: "none" }}
          disabled={loading}
        />
      </div>
      <div className="name-section">
        <h2>Name</h2>
        <form onSubmit={handleNameChange}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit" className="btn primary-btn" disabled={loading}>
            {loading ? "Updating..." : "Update Name"}
          </button>
        </form>
      </div>
      <button onClick={() => navigate("/dashboard")} className="btn secondary-btn">
        Back to Dashboard
      </button>
    </div>
  );
};

export default ProfileSettings;