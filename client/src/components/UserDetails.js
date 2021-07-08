import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetails(props) {
  const { id } = useParams();
  const [user, setUser] = useState({
    id,
    posts: [],
    name: null
  });

  useEffect(() => {
    Promise.all(props.getDeets(id))
      .then(vals => {
        setUser({
          ...user,
          posts: vals[0].data,
          name: vals[1].data.name
        });
      })
      .catch(alert);
  }, [id, props]);

  return (
    <div className='user-deets'>
      <Link to='/'>Go Back</Link>
      { user.name && <h3>{user.name}</h3> }
      { user.posts.map(post => {
        return (
          <div className='post' key={post.id}>
            <h5>Post ID: {post.id}</h5>
            <p>Text: {post.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default UserDetails;
