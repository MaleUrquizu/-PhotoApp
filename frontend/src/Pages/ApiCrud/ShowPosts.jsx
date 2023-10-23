import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../Context/ApiProvider';
import '../ApiCrud/ApiCrud.css';

function ShowPosts() {
  const { data, getAllPosts } = useApi();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setPosts(data);
    }
  }, [data]);

  return (
    <div><h2 className='gallery-title'>Gallery</h2>
    <div className='showposts-container'>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((int) => (
          <div className='showposts' key={int._id}>
            <Link to={`/post/${int._id}`}>
              <img
                className='img-showposts'
                src={int.image}
                alt={`Post ${int._id}`}
              />
            </Link>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
    </div>
  );
}

export default ShowPosts;
