import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
      <div><strong>Freelancer Platform</strong></div>
      <div>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
