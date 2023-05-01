// src/components/user/LoginPopup.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './LoginPopup.css';

const LoginPopup = ({ onClose }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        {showRegistration ? (
          <RegistrationForm onLoginClick={toggleRegistration} />
        ) : (
          <LoginForm onRegisterClick={toggleRegistration} />
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;
