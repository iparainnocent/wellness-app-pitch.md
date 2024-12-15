import React, { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import Yoga from './components/Yoga';
import Massage from './components/Massage';
import Therapy from './components/Therapy';
import ReviewComponent from './components/Review';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null); // Add activeSection state
  const [searchQuery, setSearchQuery] = useState('');
  const [showServices, setShowServices] = useState(false);
  const [services, setServices] = useState([]); // Dynamic services from backend
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch services from the backend
  useEffect(() => {
    fetch('http://127.0.0.1:5555/services') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => {
        setServices(data); // Set services dynamically
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  // Dynamically filter services based on searchQuery
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handler for "Explore Services" button
  const handleExploreServices = () => {
    setShowServices(true); // Show all services
    setSearchQuery(''); // Reset the search query to ensure all services appear
  };

  // Handler for search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query); // Update the search query
    if (query.trim()) {
      setShowServices(true); // Show filtered services when typing in the search bar
    } else {
      setShowServices(false); // Hide services if the search is cleared
    }
  };

  return (
    <Router>
      <div>
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setSearchQuery={handleSearchChange} // Pass updated search handler
        />
        {activeSection === 'about' && (
          <section id="about" className="container py-5">
            <h2>About Us</h2>
            <p>Welcome to Haven Wellness Center...</p>
          </section>
        )}
        {activeSection === 'services' && (
          <section id="services" className="container py-5">
            <h2>Our Services</h2>
            <p>We offer a variety of services tailored to your needs...</p>
          </section>
        )}
        <HeroSection onExploreServices={handleExploreServices} />
        {loading ? (
          <div className="text-center my-5">
            <p>Loading services...</p>
          </div>
        ) : (
          showServices && <ServiceSection filteredServices={filteredServices} />
        )}
        <Routes>
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/therapy" element={<Therapy />} />
        </Routes>
        <ReviewComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

