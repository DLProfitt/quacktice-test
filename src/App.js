import logo from './quacktice-test-icon.png';
import './App.css';
import { useState } from 'react';
import LoginPopup from './components/user/LoginPopup';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };


  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section className="below-icon">
            <h1>QuackticeTest</h1>
            <p className="tagline">
              Don't Wing It!
            </p>
            <button type="button" className="App-link" onClick={toggleLoginPopup}>
              Start Quackticing
            </button>
            {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
          </section>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
