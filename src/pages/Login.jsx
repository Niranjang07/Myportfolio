import { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [input, setInput] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome, ${input.username}!`);
  };

  return (
    <>
      <div className="login-bg-image"></div>

      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>🔐 Sign In</h2>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit" className="login-button">Login</button>
          <p className="login-note">Access granted to verified users only.</p>
        </form>
      </div>
    </>
  );
}

export default Login;
