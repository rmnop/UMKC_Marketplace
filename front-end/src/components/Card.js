import React from 'react';

const Card = ({ imageUrl, title, text, buttonText }) => {
  return (
    <div className="card" style={{ width: '25rem' }}>
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
