// src/pages/Profile.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import ProfileForm from '../Components/ProfileForm';
import PortfolioForm from '../Components/PortFolioForm';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <ProfileForm />
        <hr style={{ margin: '40px 0' }} />
        <PortfolioForm />
      </div>
    </div>
  );
};

export default Profile;
