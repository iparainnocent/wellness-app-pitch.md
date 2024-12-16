import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { loginUser } from './auth'; // Import the login function

const SignUp = ({ onSignUpSuccess }) => {
  // Formik hook for handling form state and submission
  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters and spaces.')
        .required('Name is required'),
      contact: Yup.string()
        .matches(/^\d{10}$/, 'Contact must be a valid 10-digit number.')
        .required('Contact is required'),
      email: Yup.string()
        .email('Please enter a valid email.')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .matches(/\d/, 'Password must contain a number.')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // Send data to the backend server
        const response = await axios.post('http://localhost:5555/users', {
          name: values.name,
          contact: values.contact,
          email: values.email,
          password: values.password // Send the password field
        });
        
        if (response.status === 201) {
          onSignUpSuccess(values.name); // Pass the username to the parent component
          alert('Sign-up successful!');

          // Automatically log in the user after sign-up
          const loggedInUser = await loginUser(values.email, values.password);
          if (loggedInUser) {
            console.log('User logged in:', loggedInUser);
            // Optionally call another function or update state here if needed
          }
        }
      } catch (error) {
        console.error('There was an error!', error);
        setErrors({ general: 'Something went wrong. Please try again.' });
      } finally {
        setSubmitting(false); // Stop the loading state after submission
      }
    }
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="signup-input"
            placeholder="Name"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="signup-error">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <input
            type="text"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="signup-input"
            placeholder="Contact"
          />
          {formik.touched.contact && formik.errors.contact && (
            <div className="signup-error">{formik.errors.contact}</div>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="signup-input"
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="signup-error">{formik.errors.email}</div>
          )}
        </div>

        {/* Password field */}
        <div>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="signup-input"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="signup-error">{formik.errors.password}</div>
          )}
        </div>

        {/* Confirm Password field */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="signup-input"
            placeholder="Confirm Password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="signup-error">{formik.errors.confirmPassword}</div>
          )}
        </div>

        {/* Display general error message if any */}
        {formik.errors.general && (
          <div className="signup-error">{formik.errors.general}</div>
        )}

        <button type="submit" className="signup-button" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
