import React, { useState, useEffect } from 'react';
import LoggedInNav from '../components/LoggedInNav';
import axios from 'axios';
import ListingCard from '../components/listingCard';
import Video from '../imgs/buyvideo.mp4';
import './Buy.css';

const ListingsComponent = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings from the server when the component mounts
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/listings/buy'); // Specify full backend URL
        setListings(response.data.data); // Assuming the response contains the listings array
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();

    // Cleanup function to cancel any pending requests if the component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
    <div className='App'>
      <LoggedInNav />
      <div className='videoWrapper'>
      <video src={Video} autoPlay loop muted className="video"></video>
      </div>
      <div className='buySection1'>
      <div className='title' style={{color: 'white'}}>Fresh arrivals and new selections.</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '7vh' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '80vw', width: '100%' }}>
          {listings.map((listing, index) => (
            <div key={listing._id} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)', padding: '10px', boxSizing: 'border-box' }}>
              <ListingCard
                user={listing.user} // Pass user as a prop
                price={listing.price} // Pass price as a prop
                title={listing.title} // Pass title as a prop
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ListingsComponent;
