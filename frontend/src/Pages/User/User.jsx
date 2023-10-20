import React, { useEffect } from 'react';
import { useApi } from '../../Context/ApiProvider.jsx';
import { Link } from 'react-router-dom';
import '../User/User.css'

function User() {
  const { data, getUserPosts } = useApi();

  useEffect(() => {
    getUserPosts();
  }, [data]);

  if (data === null) {
    return (
      <div>
        <h2>No posts yet, post something!</h2>
        <Link to={'/post/upload'}>
          <Button>Post!</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="title">MY DUMPER 🥹!!!</h1>
        <div className="container">
          {data.map((int) => (
            <div key={int._id}>
              <Link key={int._id} to={`/post/${int._id}`}>
                <img src={int.image} className="img" />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default User;
