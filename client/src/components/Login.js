import React, { useState } from 'react';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const validateForm = () => {
    setError('');

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    // Validate password length (min 8 characters) and must include a number
    const passwordRegex = /^(?=.*\d).{8,}$/; 
    if (!password || !passwordRegex.test(password)) {
      return 'Password must be at least 8 characters long and contain at least one number.';
    }

    return null; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run form validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Set error if validation fails
      return; // Prevent form submission
    }

    // Handle login logic here (e.g., send data to the server)
    console.log('Email:', email);
    console.log('Password:', password);

    onClose();
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Show error message if validation fails */}
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

        <button type="submit">Login</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginForm;
