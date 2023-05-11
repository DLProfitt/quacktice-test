// src/components/user/LoginForm.js
import React, { useState } from 'react';
import { loginUser } from '../../utils/api.js';
import { useAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      console.log("User logged in:", user);
      login(user);
      navigate("/home");
      // Redirect to dashboard
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="form-div">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={onRegisterClick}>
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
