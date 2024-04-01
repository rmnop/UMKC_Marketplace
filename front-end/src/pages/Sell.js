import React, { useState } from 'react';
import LoggedInNav from '../components/LoggedInNav';
import axios from 'axios';

function AddListing() {
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
      
    return (
      <div>
        <div className='App'>
        <LoggedInNav />
        <h2>Add Listing</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          
          <label>Images:</label>
          <input type="text" value={images} onChange={(e) => setImages(e.target.value.split(','))} />
  
          <button type="submit">Add Listing</button>
        </form>
      </div>
      </div>
    );
}

export default AddListing;
