import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceData from '../data/services.json'; 

const ServiceSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); 
  const containerRef = useRef(null); 
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true); // Opens the dropdown when typing
  };

  // Filters services based on search term
  const filteredServices = serviceData.filter(service =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handles click outside to close the dropdown
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false); // Closes the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="service-search-container" ref={containerRef}>
      <h2>Find Our Services</h2>
      <input 
        type="text" 
        placeholder="Search for a service..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      {isOpen && (
        <div className="search-results">
          {filteredServices.length > 0 ? (
            <ul>
              {filteredServices.map((service, index) => (
                <li key={index}>
                  <Link to={`/${service.service.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    <h3>{service.service}</h3>
                    <p>{service.description}</p>
                    <img src={service.image} alt={service.service} style={{ width: '100px' }} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No services found.</p> // Message if no services match the search
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceSearch;
