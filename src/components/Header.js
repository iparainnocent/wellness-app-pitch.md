import React, { useEffect, useRef, useState } from 'react';

function Header({ activeSection, setActiveSection, setSearchQuery }) {
  const containerRef = useRef();
  const [showLogin, setShowLogin] = useState(false); // State to manage login form visibility

  // Handle click to toggle sections
  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Close sections when clicking outside
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowLogin(false); // Close login form if clicking outside
    }
  };

  // Handle login form toggle
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value; // Retrieve input value
    setSearchQuery(query); // Pass the search query to the parent component
  };

  return (
<header ref={containerRef} className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* Display the logo */}
    <a className="navbar-brand" href="#">
      <img
        src="/images/wellness_logo.jpg"
        alt="Wellness Center Logo"
        className="logo"
      />
    </a>
    
    {/* App Name */}
    <div className="app-name-container">
      <h1 className="app-name">Haven Wellness Center</h1>
    </div>

    {/* Navigation and Actions Container */}
    <div className="actions-container">
      {/* Navigation links */}
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
      <form className="d-flex me-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search services..."
          aria-label="Search services"
          onChange={handleSearchChange} // Attach the handler
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {/* Login Button */}
      <button className="btn btn-outline-primary ms-2" onClick={toggleLoginForm}>
        Login
      </button>
    </div>
  </div>

  {/* Conditional rendering of the login form */}
  {showLogin && (
    <div className="login-form-overlay">
      <div className="login-form">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-secondary ms-2" onClick={toggleLoginForm}>
            Close
          </button>
        </form>
      </div>
    </div>
  )}
</header>

  );
}

export default Header;



