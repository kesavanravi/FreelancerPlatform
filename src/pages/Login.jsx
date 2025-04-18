import React from 'react';
import LoginForm from '../Components/LoginForm';
import FaceBookLoginButton from '../Components/FaceBookLoginButton';

const Login = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Login to Your Account</h2>

      {/* Normal Login Form */}
      <div style={{ marginBottom: '30px' }}>
        <LoginForm />
      </div>

      {/* OR Divider */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <span>──────────── or ────────────</span>
      </div>

      {/* Facebook Login */}
      <FaceBookLoginButton />
    </div>
  );
};

export default Login;

