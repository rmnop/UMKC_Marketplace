import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
   <nav className='navbar'>
      <div className='navbarLeft'>
        <div className='navbarLogo'>UMKC Marketplace</div>
        <a href='/'>Home</a>
        <a href='/featured'>Featured</a>
      </div>
      <div className='navbarRight'>
        <Button variant="primary btn-md"><a href='/signup' style={{color: 'white'}}>Sign Up</a></Button>
        <Button variant="primary btn-md"><a href='/login' style={{color: 'white'}}>Login</a></Button>
      </div>
   </nav>
  );
}

export default Navbar;
