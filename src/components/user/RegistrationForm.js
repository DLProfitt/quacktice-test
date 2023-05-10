import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import './LoginPopup.css';

const RegistrationForm = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const timestamp = new Date().toISOString();

    try {
      const user = {
        username: username,
        email: email,
        password_hash: password, // In a real-world application, use a strong hashing algorithm like bcrypt.
        created_at: timestamp,
        updated_at: timestamp,
      };

      const registeredUser = await registerUser(user);
      console.log('User registered successfully:', registeredUser);

      // Log the user in
      await login(registeredUser);

      // Navigate to the dashboard's home component
      navigate('/home');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <div>
            <label htmlFor="username">Username:</label>
          </div>
          <div className="input-area">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
        </div>
        <div className="login-input">
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-area">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="login-input">
          <div>
            <label htmlFor="password">Password:</label>
          </div>
          <div className="input-area">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <button type="button" onClick={onLoginClick}>
          Log in
        </button>
      </p>
    </div>
  );
};

export default RegistrationForm;
