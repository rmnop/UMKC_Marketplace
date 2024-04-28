import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import cactusPillow from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/cactus_pillow.jpeg';
import coffeeMaker from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/coffee_maker.jpg';
import pinkBP from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/backpack.jpg';
import CalcBook from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/calculus_textbooks.jpg';
import DormEssentials from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/dorm_room.jpg';
import electronics from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/electronics.jpg';
import clothes from '/Users/samuelcabrera/Desktop/Commerce_Bank_Project/UMKC_Marketplace/front-end/src/imgs/Clothes.jpg';


const Home = () => {
  return (
  <div>
  <>
  <div className='App'>
    <Navbar />
    <main>
    <section className="about-section">
      <div className="container">
        <div className="slider-content-wrap">                
          <div className="slider-content">
            <h2 className="heading-style-2">Redefining the way students can buy and sell locally</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>               
        </div>         
      </div>
      <div className="slider-images">       
        <img className="slider-image" src="img/clock.png" alt="clock img" />
        <img className="slider-image" src="img/camera.png" alt="camera img" />        
        <img className="slider-image" src="img/lamp.png" alt="lamp img" />              
      </div> 
      <div id="backgrounds">
        <div className="background" style={{background: 'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, var(--umkc-yellow) 92.19%)'}} />
        <div className="background" style={{background: 'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, var(--black-color) 100%)'}} />
        <div className="background" style={{background: 'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, var(--umkc-blue) 100%)'}} />
      </div>
    </section>   
    <h2 className="display-6 py-5">
      Listings
    </h2>
    <div className='cardContainerWrapper'>
        <div className='cardContainer'>
          <Card  className="cardList"
            imageUrl={cactusPillow}
            title="UMKC Alumni Blue & Gold Week Tee"
            buttonText="Buy Now"
          />
          <Card className="cardList"
            imageUrl={coffeeMaker}
            title="Blue and Gold Week UMKC Alumni Tee"
            buttonText="Buy Now"
          />
          <Card className="cardList"
            imageUrl={pinkBP}
            title="Ash Grey UMKC Official Seal Crop Top"
            buttonText="Buy Now"
          />
          <Card className="cardList"
            imageUrl={CalcBook}
            title="Ash Grey UMKC Official Seal Crop Top"
            buttonText="Buy Now"
          />
        </div>
      </div>
      
    <a href="/home.js"  className="btn btn-outline-dark my-5">View All Listings</a>
    <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5" id="categories">
      <div className="position-relative m-2" id="category-list">
        <img src={DormEssentials} height={300} alt="dorm"/>
        <a href="/home.js" className="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block">Dorm Essentials</a>
      </div>
      <div className="position-relative m-2" id="category-list">
        <img src={electronics} height={300} alt="electronics" />
        <a href="/home.js" className="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block">Electronics</a>
      </div>
      <div className="position-relative m-2" id="category-list">
        <img src={clothes} height={300} alt="Clothes" />
        <a href="/home.js" className="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block">Clothes</a>
      </div>
    </div>
  </main>
  </div>
  </>
</div>

  );
}

export default Home;
