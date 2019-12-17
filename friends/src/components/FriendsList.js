import React, { useState, useEffect } from 'react';
import withAuth from '../utils/withAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addFriend = newFriend => {
    withAuth()
    .post('/friends', newFriend)
    .then(res => {
      setFriends(res.data);
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <FriendForm addFriend={addFriend} />
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;