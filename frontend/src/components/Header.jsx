import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <Link to="/trips">
        <button className='header-buttons'>Trips List</button>
      </Link>
      <Link to="/stations">
        <button className='header-buttons'>Stations List</button>
      </Link>
    </div>
  );
}

export default Header;