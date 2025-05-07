import React from 'react';

const Header = ({ onAddUser }) => (
  <div className="header">
    <h1>UserHub Dashboard</h1>
    <button onClick={onAddUser}>Add New User</button>
  </div>
);

export default Header;