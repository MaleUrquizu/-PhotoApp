import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar/Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const handleMenuToggle = () => {
    setOpen(!open);
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
              <Link to={'/profile'}>Profile</Link>
            </li>
          )}
          {token ? (
            <li>
              <Link to={'/'} onClick={() => {localStorage.removeItem('token'); window.location.reload();}}>Logout</Link>
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