import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Mug Store</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search for mugs" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Sign-In</span>
          <span className="navbarLink">Register</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
