import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

function Login() {

    const [userCredentials, setUserCredentials] = useState({
        identifier: '',
        password: '',
      });

  const { identifier, password } = userCredentials;

  const { login } = useAuth()

  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await login({ identifier, password });
        console.log('Logged in!');

        setTimeout(function(){
          window.location.reload();
       }, 1000)
        navigate('/')
      } catch (error) {
        console.log('Login failed.');
      }
  };

  return (
    <div className='container-login'>
      <section>
        <h1>Login</h1>
        <div className='box-registration'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='identifier'>Email</label>
            <input
              type='text'
              name='identifier'
              id='identifier'
              autoComplete='off'
              onChange={handleChange}
              value={identifier}
              required
            />

            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={handleChange}
              value={password}
              required
            />
            <button className='btn' type='submit'>
              Login
            </button>
          </form>
        </div>
      </section>
      <Link className='text-purple' to={'/register'}>In case you don't have an account</Link>
    </div>
  );
}

export default Login;