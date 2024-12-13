import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State for active sections (e.g., About, Services, Contact)
  const [activeSection, setActiveSection] = useState(null);

  // State for toggling the ServiceSection visibility
  const [showServices, setShowServices] = useState(false);

  // Handler for "Explore Services" button
  const handleExploreServices = () => {
    setShowServices(true); // Show ServiceSection
  };

  return (
    <div>
      {/* Pass activeSection state and its updater to Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Conditional Rendering for About Section */}
      {activeSection === 'about' && (
        <section id="about" className="container py-5">
          <h2>About Us</h2>
          <p>
            Welcome to Haven Wellness Center, where your journey to health and well-being begins. 
            We are dedicated to providing a sanctuary for relaxation and rejuvenation through our 
            wide range of wellness services, including yoga, massage therapy, and spa treatments. 
            Our expert team is here to help you unwind and achieve your health goals.
          </p>
        </section>
      )}

      {/* Conditional Rendering for Services Section */}
      {activeSection === 'services' && (
        <section id="services" className="container py-5">
          <h2>Our Services</h2>
          <p>We offer a variety of services tailored to meet your wellness needs:</p>
          <ul>
            <li><strong>Yoga Classes:</strong> Enhance flexibility, strength, and mindfulness.</li>
            <li><strong>Massage Therapy:</strong> Relieve stress and muscle tension with our expert masseuses.</li>
            <li><strong>Spa Treatments:</strong> Enjoy luxurious facials, body scrubs, and more.</li>
            <li><strong>Personalized Wellness Plans:</strong> Tailored programs to meet your unique goals.</li>
          </ul>
        </section>
      )}

      {/* Conditional Rendering for Contact Section */}
      {activeSection === 'contact' && (
        <section id="contact" className="container py-5">
          <h2>Contact Us</h2>
          <p>Ready to begin your wellness journey? Reach out to us today!</p>
          <ul>
            <li><strong>Email:</strong> contact@havenwellness.com</li>
            <li><strong>Phone:</strong> (254) 456-7890</li>
            <li><strong>Address:</strong> 123 Wellness Lane, Health City</li>
          </ul>
          <p>We look forward to welcoming you to Haven Wellness Center.</p>
        </section>
      )}

      {/* Hero Section */}
      <HeroSection onExploreServices={handleExploreServices} />

      {/* Show ServiceSection conditionally */}
      {showServices && <ServiceSection />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;



