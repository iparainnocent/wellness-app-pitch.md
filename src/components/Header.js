import React, { useEffect, useRef, useState } from 'react';
import LoginForm from './Login'; // Import your LoginForm component

function Header({ activeSection, setActiveSection }) {
  const containerRef = useRef();
  const [showLogin, setShowLogin] = useState(false); // State to manage login form visibility
  const [user, setUser] = useState(null); // To store logged-in user data

  // Handle click to toggle sections
  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Close sections when clicking outside
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowLogin(false); // Close the login form
    }
  };

  // Handle login form toggle
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  // Handle login success
  const handleLoginSuccess = (userData) => {
    setUser(userData); // Store user data in state
    setShowLogin(false); // Close the login form
  };

  // Handle logout functionality
  const handleLogout = () => {
    setUser(null); // Clear user data from state
    localStorage.removeItem('user'); // Clear user data from localStorage if necessary
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser)); // Set user from local storage if available
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={containerRef} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Display the logo and app name side by side */}
        <a className="navbar-brand" href="#">
          <div className="logo-container">
            <img
              src="/images/wellness-center-logo-design-concept-spa-vector-33952332.jpg"
              alt="Wellness Center Logo"
              className="logo"
            />
            <h1 className="app-name">Haven Wellness Center</h1>
          </div>
        </a>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleSectionToggle('about')}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleSectionToggle('services')}>
                Services
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleSectionToggle('contact')}>
                Contact
              </button>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Login / Logout Button */}
          <button
            className="btn btn-outline-primary ms-2"
            onClick={user ? handleLogout : toggleLoginForm} // Log out if user is logged in
          >
            {user ? 'Logout' : 'Login'} {/* Change to Logout if user is logged in */}
          </button>
        </div>
      </div>

      {/* Conditional rendering of the login form */}
      {showLogin && (
        <div className="login-form-overlay">
          <LoginForm onClose={handleLoginSuccess} /> {/* Pass the success handler to LoginForm */}
        </div>
      )}
      
    </header>
  );
}

export default Header;
