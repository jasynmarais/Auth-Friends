import React, { useState } from 'react';
import uuid from 'uuid';

const FriendForm = ({ addFriend }) => {
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  const handleInputChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addFriend({ ...newFriend, id: uuid() });
    setNewFriend({ name: '', age: '', email: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleInputChange}
          name='name'
          placeholder='Name'
          value={newFriend.name}
        />
        <input
          type='number'
          onChange={handleInputChange}
          name='age'
          placeholder='Age'
          value={newFriend.age}
        />
        <input
          type='email'
          onChange={handleInputChange}
          name='email'
          placeholder='Email'
          value={newFriend.email}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;