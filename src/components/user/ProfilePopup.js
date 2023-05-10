import React, { useState, useEffect } from 'react';
import Profile from './Profile.js';

const ProfilePopup = ({ onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fetchedUserData, setFetchedUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8088/users/6');
        const data = await response.json();
        setFetchedUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:8088/users/${fetchedUserData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fetchedUserData),
      });
      if (response.ok) {
        console.log('User data saved successfully');
      } else {
        console.error('Error saving user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
    setIsEditing(false);
  };

  return (
    <div className="profile-popup-overlay" onClick={onClose}>
      <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
        <Profile
          userData={fetchedUserData}
          isEditing={isEditing}
          onEditClick={isEditing ? handleSaveClick : handleEditClick}
          onCloseClick={onClose}
        />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;
