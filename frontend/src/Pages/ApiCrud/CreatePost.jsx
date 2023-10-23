import React, { useState } from 'react'
import { useApi } from '../../Context/ApiProvider';
import { useAuth } from '../../Context/AuthContext'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../ApiCrud/ApiCrud.css'

function CreatePost() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [imagePreview, setImagePreview] = useState(null);
  const { createPost } = useApi();
  const { findToken } = useAuth()
  const navigate = useNavigate()

  findToken()

  const handleInputChange = (e) => {
    setCaption(e.target.value)
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('caption', caption);
      await createPost(formData);
      navigate('/user', { replace: true });
      window.location.reload();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };



  return (
    <div className='container-create'>
      <h2 className='title-create'>Dump in a new pic!</h2>
      <div>

        <form onSubmit={handleSubmit}>
          <div className='container2-create'>
            <div>

              {imagePreview ?
                <>
                  <label htmlFor="image">
                    <img className='image-create' src={imagePreview} alt="" />
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />
                </>
                :
                <>
                  <label className='labelFile' htmlFor="image"><FaPlus /></label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />
                </>
              }
            </div>
            <div className='name-create'>
              <label htmlFor="caption">Caption:</label>
              <div>
                <textarea
                  type="text"
                  id="caption"
                  name="caption"
                  value={caption}
                  onChange={handleInputChange}
                />
              </div>
            </div> 
            <div>
            <button className='button-create' type="submit">Create Post</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost