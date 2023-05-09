// src/components/user/RegistrationForm.js
import React, { useState } from 'react';
import { registerUser } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const RegistrationForm = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

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

      // Perform further actions like redirecting to the dashboard
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
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
