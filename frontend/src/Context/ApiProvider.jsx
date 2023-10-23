import React, { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/post',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const DELETE_POST_URL = 'delete'

const ApiContext = createContext()

export function useApi() {
  return useContext(ApiContext)
}

function ApiProvider({ children }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState()
  const [hasLoadedData, setHasLoadedData] = useState(false);

  const [posts, setPosts] = useState([]);

  //GETS ALL POSTS
  const getAllPosts = async () => {
    setIsLoading(true); 
    try {
      const response = await axios.get('http://localhost:8000/post');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); 
    }
  };

  const getUserPosts = async () => {
    if (hasLoadedData) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.get('http://localhost:8000/post/myprofile');
      console.log(response);
      setData(response.data.Posts);
      setHasLoadedData(true); 

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  //GESTS A POST
  const getAPost = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/post/${userId}`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  //CREATES POST
  const createPost = async (newPost) => {
    try {
      const response = await axiosInstance.post(`http://localhost:8000/post/upload`, newPost)
      console.log(response.data)
      if (response) {
        const createdPost = response.data
        setData([...data, createdPost])

        alert('Post created successfully');
      }
    } catch (error) {
      alert('There has been an error uploading the caption')
      console.log(error)
    }
  }

  //UPDATES POST
  const updatePost = async (postId, updatedCaption) => {
    try {
      const response = await axiosInstance.put(`http://localhost:8000/post/update/${postId}`, { caption: updatedCaption })
      const updatedPost = await response.data;
      console.log(updatedPost)
      try {
        setData([...data, updatedPost]);
        console.log(updatedPost)

      } catch (error) {
        console.log(error)
      }
      alert('Post updated successfully');
      console.log(data)
    } catch (error) {
      alert('You are not authorized to update a post you didnt upload')
      console.error(error);
    }
  };

  //UPDATES A POST IMAGE
  const imageUpdate = async (postId, updatedImage) => {
    try {
      const response = await axiosInstance.put(`http://localhost:8000/post/image/update/${postId}`, updatedImage)
      const updatedPostImage = await response.data;
      try {
        setData(...data, updatedPostImage)
        console.log(updatedPostImage)
      } catch (error) {
        console.log(error)
      }
      alert('Image updated successfully');
      console.log(data)

    } catch (error) {
      alert('You are not authorized to update a post you didnt upload')
      console.error(error);
    }
  }

  //DELETES POST
  const deletePost = async (postId) => {
    try {
      const response = await axiosInstance.delete(`http://localhost:8000/post/${DELETE_POST_URL}/${postId}`)

      if (response.status === 200) {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  useEffect(() => {
    if (data && data.length === 0 && !isLoading) {
      getAllPosts();
    }
  }, [data, isLoading]);


  useEffect(() => {
    if (!hasLoadedData) {
      getUserPosts();
    }
  }, [hasLoadedData]);

  const contextValue = {
    data,
    isLoading,
    createPost,
    getAllPosts,
    getAPost,
    updatePost,
    deletePost,
    getUserPosts,
    imageUpdate
  };


  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider