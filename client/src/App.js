import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import User from './components/User';
import UserDetails from './components/UserDetails';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(alert);
  }, []);

  const getDeets = (id) => {
    return [
      axios.get(`/api/users/${id}/posts`),
      axios.get(`/api/users/${id}`)
    ];
  }

  return (
    <Router>
      <Switch>
        <Route path='/users/:id'>
          <UserDetails getDeets={getDeets}/>
        </Route>
        <Route path='/'>
          <div>
            <h3>Users and Posts</h3>
            <>
              { users.map(user => <User key={user.id} user={user}/>) }
            </>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
