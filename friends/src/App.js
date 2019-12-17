import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

const LoginForm = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
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
    </div>
  );
}

export default App;
