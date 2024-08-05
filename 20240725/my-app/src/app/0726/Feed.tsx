"use client"; // Mark this component as a client component

import React from 'react';
import UserList from './components/UserList';

// Bonus Task: Update the Feed Page to Use the UserList Component

const Feed = () => {
  return (
    <div>
      {/* Render the UserList component */}
      <UserList />
    </div>
  );
};

export default Feed;


// // Task 4: Create a Feed Page to Display All Users
// import React from 'react';
// import { users } from './data';
// import UserCard from './components/UserCard';

// const Feed: React.FC = () => {
//   return (
//     <div>
//       {users.map((user, index) => (
//         <UserCard key={index} user={user} />
//       ))}
//     </div>
//   );
// };

// export default Feed;