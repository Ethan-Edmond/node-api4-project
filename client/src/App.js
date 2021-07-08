import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: window.href
});

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users')
      .then(console.log)
      .catch(alert);
  }, []);

  console.log(window.location);
  return (
    <div>
      <>
        { users.map(user => "This is a user") }
      </>
    </div>
  );
}

export default App;
