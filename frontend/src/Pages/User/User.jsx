import React, { useEffect } from 'react';
import { useApi } from '../../Context/ApiProvider.jsx';
import { Link } from 'react-router-dom';
import '../User/User.css';



function User() {
  const { data, getUserPosts } = useApi();

  useEffect(() => {
    getUserPosts();
  }, []);

  if (!data || !data.length) { // Comprueba si data es nulo o su longitud es cero
    return (
      <div>
        <h2>No posts yet, post something!</h2>
        <Link to={'/post/upload'}>
          <button className="button-user">
            Post!
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="title">Explore my photos 📷</h1>
        <div className="container">
          {data.map((int) => (
            <div key={int._id}>
              <Link key={int._id} to={`/post/${int._id}`}>
                <img src={int.image} alt={int.caption} className="img" />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default User;



