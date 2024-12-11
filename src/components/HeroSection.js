import React from 'react';

function HeroSection({ onExploreServices }) {
  return (
    <section className="hero bg-image text-center" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
      <div className="container">
        <h1 className="display-4 text-white">Discover Wellness</h1>
        <p className="lead text-white">Yoga, Massage, and Therapy</p>
        <div>
          <button className="btn btn-primary m-2" onClick={onExploreServices}>Explore Services</button>
          <button className="btn btn-secondary m-2">Join Us</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

