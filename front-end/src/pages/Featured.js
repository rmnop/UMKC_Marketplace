import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Shirt1 from '../imgs/DemoShirt1.jpeg'
import Shirt2 from '../imgs/DemoShirt2.jpeg'
import Shirt3 from '../imgs/DemoShirt3.jpeg'
import './Featured.css'

const Featured = () => {
  return (
    <>
    <div className='App'>
    <Navbar />
    <div className='pageWrapper'>
    <div className='title'>
        Featured Items
    </div>
    <div className='cardContainerWrapper'>
        <div className='cardContainer'>
          <Card
            imageUrl={Shirt1}
            title="UMKC Alumni Blue & Gold Week Tee"
            buttonText="Buy Now"
            href='/login'
          />
          <Card
            imageUrl={Shirt2}
            title="Blue and Gold Week UMKC Alumni Tee"
            buttonText="Buy Now"
            href='/login'
          />
          <Card
            imageUrl={Shirt3}
            title="Ash Grey UMKC Official Seal Crop Top"
            buttonText="Buy Now"
            href='/login'
          />
        </div>
      </div>
      </div>
      </div>
      </>
  )
}

export default Featured