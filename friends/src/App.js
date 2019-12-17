import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { FriendsList } from './components/FriendsList';
import { LoginForm } from './components/LoginForm';
import { PrivateRoute } from './components/PrivateRoute';


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
