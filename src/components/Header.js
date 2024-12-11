import React, { useEffect, useRef } from 'react';

function Header({ activeSection, setActiveSection }) {
  const containerRef = useRef();

  // Handle click to toggle sections
  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Close sections when clicking outside
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveSection(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={containerRef} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/*Display the logo */}
        <a className="navbar-brand" href="#">
         <img
                 src="https://cdn3.vectorstock.com/i/1000x1000/23/32/wellness-center-logo-design-concept-spa-vector-33952332.jpg"
                 alt="Wellness Center Logo"
                 className="logo"


        />
          <span className =" Haven Wellness Center">Haven wellness center</span>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
