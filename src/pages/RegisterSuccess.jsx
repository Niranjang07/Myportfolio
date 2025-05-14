// src/pages/RegisterSuccess.jsx
import React, { useState } from 'react';
import './RegisterSuccess.css';

function RegisterSuccess() {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptcha = (e) => {
    setIsVerified(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("✅ Please confirm you're not a robot.");
      return;
    }

    alert("🎉 Your registration has been submitted! You will receive an email once approved by the admin.");
  };

  return (
    <>
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/register.mp4" type="video/mp4" />
      </video>

      <div className="register-success-container">
        <h2>📬 Registration Request Sent</h2>
        <p>
          We've received your registration request. A confirmation email has been sent to your inbox. 
          Please wait while an admin reviews and approves your access to the peer space.
        </p>

        <form onSubmit={handleSubmit} className="confirmation-box">
          <label className="captcha-check">
            <input type="checkbox" onChange={handleCaptcha} />
            I’m not a robot 🤖
          </label>
          <button type="submit" className="confirm-btn" disabled={!isVerified}>
            Finish
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterSuccess;
