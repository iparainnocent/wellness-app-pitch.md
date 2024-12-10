import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container my-5">
        <div className="row">
          <ServiceCard title="Yoga" description="Relax and rejuvenate with our yoga classes." image="/assets/yoga.jpg" />
          <ServiceCard title="Massage" description="Experience relaxation with our massage services." image="/assets/massage.jpg" />
          <ServiceCard title="Therapy" description="Find peace with our therapy sessions." image="/assets/therapy.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
