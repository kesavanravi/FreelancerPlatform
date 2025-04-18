// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import '../RegisterForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError('');
    console.log('Registered user:', formData);
    navigate('/dashboard'); // mock navigation
  };

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <h2>Create Account</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Register</button>

      <p className="switch-link">
        Already have an account? <a href="/">Login here</a>
      </p>
    </form>
  );
};

export default RegisterForm;
