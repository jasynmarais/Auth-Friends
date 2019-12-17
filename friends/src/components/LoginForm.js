import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = props => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', formValues)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
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

export default LoginForm;