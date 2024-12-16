import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = ({ onSignUpSuccess }) => {
  // Formik hook for handling form state and submission
  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',  // Added contact field
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters and spaces.')
        .required('Name is required'),
      contact: Yup.string()
        .matches(/^\d{10}$/, 'Contact must be a valid 10-digit number.') // Assuming contact is a phone number
        .required('Contact is required'),
      email: Yup.string()
        .email('Please enter a valid email.')
        .required('Email is required')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // Send data to the backend server
        const response = await axios.post('http://127.0.0.1:5555/users', {
          name: values.name,
          contact: values.contact, // Send contact field
          email: values.email
        });
        
        if (response.status === 201) {
          onSignUpSuccess(values.name); // Pass the username to the parent component
          alert('Sign-up successful!');
        }
      } catch (error) {
        // Handle errors (e.g., network or validation errors from the backend)
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
            type="text"  // Assuming contact is a phone number
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
