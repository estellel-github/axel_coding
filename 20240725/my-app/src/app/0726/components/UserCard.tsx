import React from 'react';
import { SocialNetworkUser } from '../interfaces';

interface UserCardProps {
  user: SocialNetworkUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name} {user.lastName}</h2>
      <p>{user.statusMessage}</p>
    </div>
  );
};

export default UserCard;