/*import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from '../../Context/ApiProvider'
import '../../App.css'

function ShowPosts() {
    const { data, getAllPosts } = useApi();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        // Verifica si data es un arreglo antes de establecerlo en posts
        if (Array.isArray(data)) {
            setPosts(data);
        }
    }, [data]);

    return (
        <div className='grid max-w-7 mx-3 pt-5 gap-3 xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-2'>
            {Array.isArray(posts) ? (
                posts.map((int) => (
                    <div className='text-pink blur hover:blur-none' key={int._id}>
                        <Link className='flex h-full mx-w-full' to={`/post/${int._id}`}>
                            <img className='rounded object-cover' src={int.image} alt={`Post ${int._id}`} />
                        </Link>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
    
}

export default ShowPosts;
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../Context/ApiProvider';
import '../../App.css';

function ShowPosts() {
  const { data, getAllPosts } = useApi();
  const [posts, setPosts] = useState([]);

 /* useEffect(() => {
    getAllPosts();
  }, []);*/
  useEffect(() => {
    getAllPosts(); 
}, [getAllPosts]); 


  useEffect(() => {
    // Verifica si data es un arreglo antes de establecerlo en posts
    if (Array.isArray(data)) {
      setPosts(data);
    }

    // Agrega esta línea para imprimir la estructura de data en la consola
    console.log(data);
  }, [data]);

  return (
    <div className='grid max-w-7 mx-3 pt-5 gap-3 xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-2'>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((int) => (
          <div className='text-pink blur hover:blur-none' key={int._id}>
            <Link className='flex h-full mx-w-full' to={`/post/${int._id}`}>
              <img
                className='rounded object-cover'
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
  );
}

export default ShowPosts;