import React from 'react';
import '../LoginForm.css';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add login logic here.
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    
    <div className="login-container">
      <div className="login-box">
        <button className="close-btn"></button>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="text" placeholder="Username or email" required />
          </div>
          <div className="input-group password-group">
            <input type="password" placeholder="Password" required />
            <span className="eye-icon"></span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button type="submit" className="login-btn">Login</button>
          </div>

          {/* <div className="links">
            <a href="#">Register now</a>
            <a href="#">Forgot password?</a>
          </div> */}

          <div className="divider">or</div>

          <div className="links">
  <a href="/register">Register now</a>
  <a href="#">Forgot password?</a>
</div>
          <div className="social-buttons">
            <button className="facebook">Login with Facebook</button>
            <button className="twitter">Login with Twitter</button>
            <button className="google">Login with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
