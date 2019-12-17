import React from 'react';
export const Friend = ({ friend }) => {
  return (
    <div>
      <ul>
        <li>{friend.name}</li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
    </div>
  );
};