import React, { useEffect, useState } from 'react'
import { useApi } from '../../Context/ApiProvider'
import { Link, useParams } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import '../ApiCrud/ApiCrud.css'

function SinglePost() {
  const { data, getAPost } = useApi()
  const { id } = useParams()
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [token])

  useEffect(() => {
    getAPost(id);
  }, [id, getAPost]);


  return (
    <div className='container-siglepost'>
      <div className='icons-siglepost'>
        <Link className='edit' to={`/post/update/${id}`}><FaEdit /></Link>
        <Link className='delete'to={`/post/delete/${id}`}><FaTrashAlt /></Link>
      </div>
      <div className='container2-siglepost'>
        <div className='siglepost-img'>
          <img className='image' src={data.image} alt="" />
        </div>
        <div className='caption'>{data.caption}</div>
      </div>
    </div>
  )
}

export default SinglePost