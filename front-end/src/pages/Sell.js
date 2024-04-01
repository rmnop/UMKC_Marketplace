import React, { useState, useEffect } from 'react';
import LoggedInNav from '../components/LoggedInNav';
import axios from 'axios';
import './Sell.css';
import { Button } from 'react-bootstrap';

function AddListing() {
  const [userData, setUserData] = useState(null); // Initialize userData state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
  
    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
      
          // Retrieve the token from local storage
          const token = localStorage.getItem('token');
          console.log('Token retrieved:', token); // Log the retrieved token
      
          // Include the token in the request headers
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          console.log('Request config:', config); // Log the request configuration
      
          const response = await axios.post(
            'http://localhost:3000/listings',
            { title, description, price, images },
            config  // Pass the config object containing the headers
          );
      
          console.log('Listing added:', response.data);
        } catch (error) {
          console.error('Error adding listing:', error);
        }
    };

    useEffect(() => {
      // Fetch user data when the component mounts
      const fetchUserData = async () => {
          try {
              // Retrieve the token from local storage
              const token = localStorage.getItem('token');

              // Include the token in the request headers
              const config = {
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
              };

              // Fetch user data from the server
              const response = await axios.post(
                  'http://localhost:3000/userData',
                  { token },
                  config
              );

              // Set the user data in state
              setUserData(response.data.data);
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      };

      fetchUserData(); // Call the fetchUserData function
  }, []); // Empty dependency array to run the effect only once when the component mounts

      
    return (
      <div>
        <div className='App'>
        <LoggedInNav />
        <h2 className='title'>Add Listing</h2>
       <div className='listingWrapper'>

        <div className='userWrapper'>
          <div className='userLeft'>
          <img src={userData?.profilePicture} className='postUserImage'/>
          <div className='postUserName' style={{fontSize: '1rem'}}>{userData?.fname} {userData?.lname}</div>
          </div>
          <div className='userRight'>
          <Button variant="primary" className='postUserButton'>Change User</Button>
          </div>
        </div>


        <form onSubmit={handleSubmit} className='postForm'>
      <div className='postTitleWrapper'>
      <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className='titleBox'/>
      </div>

        <div className='descriptionWrapper'>
        <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className='descriptionBox'></textarea>
        </div>


        <div className='priceWrapper'>
        <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required className='priceBox'/>
          
        </div>

        <div className='uploadWrapper'>
        <label>Images:</label>
          <input type="text" value={images} onChange={(e) => setImages(e.target.value.split(','))} className='imageBox'/>
  

        </div>
        
          
          
          
          
          
          
          <Button variant='primary' type='submit'>Add Listing</Button>
        </form>
       </div>
       
      </div>
      </div>
    );
}

export default AddListing;
