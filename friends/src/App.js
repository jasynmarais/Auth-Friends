import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const FriendsList = () => {
  return (
    <div>
      <h1>Friends List</h1>
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
      <Route path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
