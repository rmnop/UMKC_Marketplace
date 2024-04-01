import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';


const LoggedInNav = () => {
  return (
   <nav className='navbar'>
      <div className='navbarLeft'>
        <div className='navbarLogo'>UMKC Marketplace</div>
        <a href='/loggedinfeatured'>Featured</a>
      </div>
      <div className='navbarRight'>
        <Button variant='primary'><a href='/buy' style={{color: 'white'}}>Buy</a></Button>
        <Button variant='primary'><a href='/sell' style={{color: 'white'}}>Sell</a></Button>
        <a href='/profile'><FontAwesomeIcon icon={faUser} className='fa-xl'/></a>
      </div>
   </nav>
  );
}

export default LoggedInNav;
