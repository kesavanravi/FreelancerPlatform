import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const FacebookLoginButton = () => {
  const handleSuccess = (response) => {
    console.log('✅ Login Success:', response);
    // You can store user data in state or context
  };

  const handleFail = (error) => {
    console.error('❌ Login Failed:', error);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID" // Replace with your FB App ID
        onSuccess={handleSuccess}
        onFail={handleFail}
        onProfileSuccess={(response) => {
          console.log('📘 Profile Fetched:', response);
        }}
        style={{
          backgroundColor: '#4267B2',
          color: '#fff',
          fontSize: '16px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default FacebookLoginButton;
