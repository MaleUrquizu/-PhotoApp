import React, { useEffect } from 'react';
import { useApi } from '../../Context/ApiProvider';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

function DeletePost() {
  const { deletePost } = useApi();
  const { id } = useParams();
  const navigate = useNavigate();
  const { findToken } = useAuth();

  findToken();

  useEffect(() => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');

    if (confirmDelete) {
      deletePost(id)
        .then(() => {
          navigate('/user', { replace: true });
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    } else {
      navigate(`/post/${id}`);
    }
  }, [deletePost, id]);

  return (
    <div>
      <p>Deleting post...</p>
    </div>
  );
}

export default DeletePost;
