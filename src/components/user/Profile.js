import React, { useState, useEffect } from 'react';
import { updateUser } from '../../utils/api.js';
import defaultProfilePic from '../../profile-pic-ernie.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.js';

const Profile = ({ userData, isEditing, onEditClick, onCloseClick }) => {
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState('');
  const [aboutMe, setAboutMe] = useState(userData.about_me || '');

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(userData.username);
    setEmail(userData.email);
    setAboutMe(userData.about_me || '');
  }, [userData]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const timestamp = new Date().toISOString();

    try {
      const user = {
        id: userData.id,
        username: username,
        email: email,
        password_hash: password,
        about_me: aboutMe,
        created_at: userData.created_at,
        updated_at: timestamp,
      };

      const updatedUser = await updateUser(userData.id, user);
      console.log('User updated successfully:', updatedUser);

      await login(email, password); // Replace this line

      navigate('/home');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="profile">
      <img
        src={defaultProfilePic}
        alt="User Profile"
        className="profile-picture-large"
      />
      <h2>{username}</h2>
      <form className="profile-form">
        {isEditing && (
          <>
            <div className="login-input">
              <div>
                <label htmlFor="username">Username:</label>
              </div>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>
            <div className="login-input">
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <div>
                <input type="email" value={email} onChange={handleEmailChange} />
              </div>
            </div>
            <div className="login-input">
              <div>
                <label htmlFor="password">Password:</label>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
          </>
        )}
        {!isEditing && (
          <>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p className="password">Password: *****</p>
          </>
        )}
        <textarea
          id="about-me"
          rows="4"
          cols="50"
          value={aboutMe}
          readOnly={!isEditing}
          onChange={handleAboutMeChange}
        ></textarea>
        <button type="button" onClick={isEditing ? handleSubmit : onEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
