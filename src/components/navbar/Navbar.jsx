import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link className="logo navbarLink" to="/">Mug Store</Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search for mugs" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link className="navbarLink" to="/">Sign-In</Link>
          <Link className="navbarLink" to="/">Register</Link>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Link className="navbarLink" to="/cart"><ShoppingCartIcon /></Link>
            <span className="navbarIconBadge">{props.cart.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
