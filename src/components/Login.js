import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({ onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/\d/, 'Password must contain at least one number')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:5555/login', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = response.data;
        if (response.status === 200) {
          console.log('Login successful:', data);
          localStorage.setItem('user', JSON.stringify(data));
          setIsLoggedIn(true);
          setUserData(data);
          setSuccessMessage('Successfully logged in');

          // Delay closing the form
          setTimeout(() => {
            onClose(data); // Close the login form after a delay
          }, 2000); 
        }
      } catch (error) {
        console.error('Login error:', error);

        // Check if error response exists and handle specific errors
        if (error.response) {
          if (error.response.status === 401) { 
            formik.setErrors({ general: 'Incorrect password' });
          } else if (error.response.status === 404) { 
            formik.setErrors({ general: 'Invalid email address' });
          } else {
            formik.setErrors({ general: 'An error occurred. Please try again later.' });
          }
        } else {
          formik.setErrors({ general: 'An error occurred. Please try again later.' });
        }
      }
    },
  });

  const handleLogout = async () => {
    try {
      const response = await axios.delete('http://127.0.0.1:5555/logout');
      if (response.status === 200) {
        console.log('Logout successful');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserData(null);
        setSuccessMessage('');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="login-form">
      {!isLoggedIn ? (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            )}
          </div>

          {/* Displays any general error message */}
          {formik.errors.general && <div style={{ color: 'red', marginTop: '10px' }}>{formik.errors.general}</div>}

          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Welcome, {userData.name}</h2>
          {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>} {/* Display success message */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <button
        onClick={() => {
          onClose();
          setSuccessMessage('');
        }}
      >
        Close
      </button>
    </div>
  );
};

export default LoginForm;
