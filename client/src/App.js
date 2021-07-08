import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

const api = axios.create({
  baseURL: window.href
});

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(alert);
  }, []);

  console.log(window.location);
  return (
    <div>
      <h3>Users and Posts</h3>
      <>
        { users.map(user => <User key={user.id} user={user}/>) }
      </>
    </div>
  );
}

export default App;
