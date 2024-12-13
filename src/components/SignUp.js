import React, { useState } from 'react';

const SignUp = ({ onSignUpSuccess }) => {
  // State for form inputs and validation messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Clear errors
  const clearErrors = () => {
    setErrors({
      name: '',
      email: '',
      password: ''
    });
  };

  // Validate the form fields
  const validateForm = () => {
    let formValid = true;
    let newErrors = { name: '', email: '', password: '' };

    // Validate Name
    if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must only contain letters and spaces.';
      formValid = false;
    }

    // Validate Email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
      formValid = false;
    }

    // Validate Password
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();

    // Validate the form
    if (validateForm()) {
      setSuccessMessage('Sign-up successful!');
      onSignUpSuccess(formData.name); // Pass the username to the parent component
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="signup-input"
          placeholder="Name"
        />
        {errors.name && <div className="signup-error">{errors.name}</div>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="signup-input"
          placeholder="Email"
        />
        {errors.email && <div className="signup-error">{errors.email}</div>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="signup-input"
          placeholder="Password"
        />
        {errors.password && <div className="signup-error">{errors.password}</div>}

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      {successMessage && <div className="signup-success">{successMessage}</div>}
    </div>
  );
};

export default SignUp;
