import React, { useState, useEffect } from 'react'
import { useApi } from '../../Context/ApiProvider'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import '../ApiCrud/ApiCrud.css'

function UpdatePost() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [prevCaption, setPrevCaption] = useState('')
  const [imagePreview, setImagePreview] = useState(null);
  const { findToken } = useAuth()

  const navigate = useNavigate()

  findToken()

  const { updatePost, imageUpdate, getAPost, data } = useApi()
  const { id } = useParams()



  useEffect(() => {
    getAPost(id)
  }, [])

  const handleInputChange = (e) => {
    const changeCaption = e.target.value
    setCaption(changeCaption)

    if (!changeCaption) {
      setPrevCaption(data.caption)
    }
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

      await imageUpdate(id, formData)
      await updatePost(id, caption);

      navigate('/user', { replace: true });
      window.location.reload();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='container-updatepost'>
      <h2 className='title'>Edit your post</h2>
      <form onSubmit={handleSubmit}>
        <div className='container2-updatepost'>
          {imagePreview ?
            <>
              <label htmlFor="image">
                <img className='img-updatepost' src={imagePreview} alt="" />
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
              <label className='labelFile' htmlFor="image">
                <img src={data.image} alt="" />
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/jpg,png"
                onChange={handleImageChange}
                hidden
              />
            </>
          }
          <div className='caption-updatepost'>
            <label className='font-semibold' htmlFor="caption">Caption:</label>
            <textarea
              type="text"
              id="caption"
              name="caption"
              value={caption ? caption : data.caption}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className='button-updatepost' type="submit">Update Post</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatePost