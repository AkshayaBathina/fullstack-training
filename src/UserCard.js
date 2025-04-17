import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
