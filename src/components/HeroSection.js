import React, { useState } from 'react';
import SignUp from './SignUp'; 

function HeroSection({ onExploreServices }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userName, setUserName] = useState(''); // Store the username for the welcome message

  const handleJoinClick = () => {
    setShowSignUp((prevShowSignUp) => !prevShowSignUp); // Toggle the visibility of the sign-up form
  };

  const handleSignUpSuccess = (name) => {
    setUserName(name); // Set the username after successful sign-up
    setShowSignUp(false); // Hide the sign-up form
  };

  return (
    <section className="hero bg-image text-center" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
      <div className="container">
        <h1 className="display-4 text-white">Discover Wellness</h1>
        <p className="lead text-white">Yoga, Massage, and Therapy</p>
        <div>
          <button className="btn btn-primary m-2" onClick={onExploreServices}>Explore Services</button>
          <button className="btn btn-secondary m-2" onClick={handleJoinClick}>
            {showSignUp ? 'Close' : 'Join Us'} 
          </button>
        </div>

        {/* Conditionally render the SignUp component or welcome message */}
        {showSignUp ? (
          <SignUp onSignUpSuccess={handleSignUpSuccess} />
        ) : userName ? (
          <h3>Welcome to Haven, {userName}!</h3>
        ) : null}
      </div>
    </section>
  );
}

export default HeroSection;
