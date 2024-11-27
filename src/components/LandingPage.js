import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the necessary CSS file

const LandingPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setIsLoginVisible(true); // Show the login form
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    // Hardcoded login for demo purposes
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'admin123') {
      navigate('/dashboard'); // Navigate to dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={`landing-container ${isLoginVisible ? 'split' : ''}`}>
      {/* Left Section (Brief about the Dashboard) */}
      <div className={`left-section ${isLoginVisible ? 'shrink' : ''}`}>
        <h1>AdminEase</h1>
        <p>
          Welcome to the Admin Dashboard! This dashboard allows you to manage users, roles, and permissions
          efficiently. You can also track recent activities and monitor various aspects of your system.
        </p>
        {!isLoginVisible && (
          <button onClick={handleGetStartedClick} className="get-started-btn">
            Get Started
          </button>
        )}
      </div>

      {/* Right Section (Login Form) */}
      {isLoginVisible && (
        <div className="right-section">
          <form onSubmit={handleSubmitLogin} className="login-form">
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
