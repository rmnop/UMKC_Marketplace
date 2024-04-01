import React from "react";
import Shirt from "../imgs/DemoShirt1.jpeg";
import "./listingCard.css";


export default function ListingCard({ user, price, title }) {
    return (
        <>
      <div className="card" style={{ width: '25rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <img src={Shirt} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <a href="#" className="btn btn-primary">Buy</a>
        </div>
      </div>
      </>
    )
  };

