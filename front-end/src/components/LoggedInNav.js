import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


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
        <FontAwesomeIcon icon={faCartShopping} className='fa-xl' style={{color: '#0C6DFD'}}/>
      </div>
   </nav>
  );
}

export default LoggedInNav;
