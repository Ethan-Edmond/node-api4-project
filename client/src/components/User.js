import React from 'react';

function User(props) {
  return (
    <div className='user'>
      <h5>{props.user.name}</h5>
    </div>
  );
};

export default User;
