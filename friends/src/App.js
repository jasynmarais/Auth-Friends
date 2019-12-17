import React, { useState, useEffect, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const withAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
    localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  }
/>
);

const Friend = ({ friend }) => {
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

  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

const LoginForm = props => {
  //const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', formValues)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
        console.log(err.response.data.error);
        setFormValues({ username: '', password: '' });
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
        type='text'
        onChange={handleInputChange} 
        value={formValues.username}
        placeholder='Username' 
        name='username' 
        />
        <input 
        type='password' 
        onChange={handleInputChange} 
        value={formValues.password}
        placeholder='Password' 
        name='password' 
        />
        <button>Login</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
