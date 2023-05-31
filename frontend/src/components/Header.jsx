import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (

    <div class="header-container">

    <div className="header">

      <h1 className='header1'>Helsinki City Bike</h1>
    </div>

      <div class="header-buttons">

      <Link to="/trips" style={{ textDecoration: 'none' }}>
        <button> Trips List </button>
      </Link>
      <Link to="/stations" style={{ textDecoration: 'none' }}>
        <button> Stations List </button>
      </Link>
    </div>
    </div>
    

  );
}

export default Header;