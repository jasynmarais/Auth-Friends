import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div>
      <ul>
        <li><b>{friend.name}</b></li>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
    </div>
  );
};

export default Friend;