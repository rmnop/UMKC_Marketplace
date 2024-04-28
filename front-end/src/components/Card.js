import React from 'react';

const Card = ({ imageUrl, title, text, buttonText }) => {
  return (
    <div className="card" style={{ width: '25rem',   boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }}>
      <img src={imageUrl} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  )
}

export default Card;
