import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
   <nav className='navbar'>
      <div className='navbarLeft'>
        <div className='navbarLogo'>UMKC Marketplace</div>
        <a href='/'>Home</a>
        <a href='/featured'>Featured</a>
      </div>
      <div className='navbarRight'>
        <a href='/signup'>Sign Up</a>
        <a href='/login'>Login</a>
      </div>
   </nav>
  );
}

export default Navbar;
