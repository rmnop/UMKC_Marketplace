import React from 'react';
import './Navbar.css';

const LoggedInNav = () => {
  return (
   <nav className='navbar'>
      <div className='navbarLeft'>
        <div className='navbarLogo'>UMKC Marketplace</div>
        <a href='/loggedinfeatured'>Featured</a>
      </div>
      <div className='navbarRight'>
        <a href='/signup'>Buy</a>
        <a href='/login'>Sell</a>
        <a href='/profile'>Profile</a>
      </div>
   </nav>
  );
}

export default LoggedInNav;
