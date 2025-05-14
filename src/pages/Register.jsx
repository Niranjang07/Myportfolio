// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'peer',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate('/register-success');
      } else {
        const error = await res.json();
        alert(error.message || 'Registration failed');
      }
    } catch (err) {
      alert('An unexpected error occurred.');
      console.error(err);
    }
  };

  return (
    <>
      <video autoPlay muted loop className="register-bg-video">
        <source src="/videos/register.mp4" type="video/mp4" />
      </video>

      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>🚀 Join the Peer Space</h2>
          <p>Fill out the form to request access to the community.</p>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="peer">Peer</option>
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
