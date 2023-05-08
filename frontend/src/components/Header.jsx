import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/trips">
        <button>Trips List</button>
      </Link>
      <Link to="/stations">
        <button>Stations List</button>
      </Link>
    </div>
  );
}

export default Header;