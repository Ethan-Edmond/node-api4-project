import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
  return (
    <Link to={`/users/${props.user.id}`} className='user'>
      <h5>{props.user.name}</h5>
    </Link>
  );
};

export default User;
