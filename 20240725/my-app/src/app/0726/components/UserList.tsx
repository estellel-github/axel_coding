import React, { Component } from 'react';
import UserCard from './UserCard';
import { SocialNetworkUser } from '../interfaces';

interface UserListProps {}

interface UserListState {
  users: SocialNetworkUser[];
}

class UserList extends Component<UserListProps, UserListState> {
  constructor(props: UserListProps) {
    super(props);
    this.state = {
      users: [
        { name: 'Alice', lastName: 'Smith', statusMessage: 'Excited for the weekend!' },
        { name: 'Bob', lastName: 'Johnson', statusMessage: 'Loving the new features in TypeScript.' },
        { name: 'Charlie', lastName: 'Brown', statusMessage: 'Just finished a great book.' },
        { name: 'Dana', lastName: 'White', statusMessage: 'Looking forward to the holidays.' },
        { name: 'Eve', lastName: 'Davis', statusMessage: 'Just started a new project!' },
      ],
    };
  }

  render() {
    return (
      <div className="user-list">
        {this.state.users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default UserList;