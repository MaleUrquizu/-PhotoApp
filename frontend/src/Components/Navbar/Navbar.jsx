import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); // Actualiza el estado token a null
    navigate('/');
  };

  return (
    <div className={`navbar ${open ? 'open' : ''}`}>
      <div className='logo'>
        <Link to={'/'}>
          PhotoApp🌻
        </Link>
      </div>
      <div className='menu-icon' onClick={handleMenuToggle}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          {token && (
            <li>
              <Link to={'/post/upload'}>Post</Link>
            </li>
          )}
          {token && (
            <li>
              <Link to={'/user'}>Profile</Link>
            </li>
          )}
          {token ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to={'/login'}>Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

