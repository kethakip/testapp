import React from 'react';

import {Link} from 'react-router-dom';


function Header() {
    return (
      <div>
          <nav className = "navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Random Users App </span> 
          <Link to= "/">Home</Link>
          <Link to= "/users">User List</Link>
          <Link to= "/users/1">User Details</Link>
          <Link to= "/about">About</Link>
          </nav>
       
        </div>
    );
  }
  

  export default Header;