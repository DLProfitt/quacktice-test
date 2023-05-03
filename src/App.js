import React, { useState } from 'react';
import logo from './quacktice-test-header-image.png';
import './App.css';
import LoginPopup from './components/user/LoginPopup';
import { useAuth } from './context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { user } = useAuth();

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <div className="App">
      {user ? (
        <Dashboard />
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
