import React, { useState } from 'react';
import logo from './quacktice-test-header-image.png';
import './App.css';
import LoginPopup from './components/user/LoginPopup.js';
import { useAuth } from './context/AuthContext.js';
import Dashboard from './components/dashboard/Dashboard.js';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { user } = useAuth();

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <div className="App">
      {user ? (
        // Pass the user object to the Dashboard component as userData prop
        <Dashboard userData={user} />

      ) : (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <section className="below-icon">
              <p className="tagline">Don't Wing It!</p>
              <button type="button" className="App-link" onClick={toggleLoginPopup}>
                Start Quackticing
              </button>
              {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
            </section>
          </header>
        </>
      )}
    </div>
  );
}

export default App;
