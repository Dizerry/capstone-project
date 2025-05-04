import React from 'react';
import image1 from '../assets/image1.jpg'; // Ensure you have the correct path to your image

const Reserve = () => {
  return (
    <div className="cardR">
      <div className="cardR-text">
        <h1>LITLE LEMON</h1>
        <h2>CHICAGO</h2>
        <p>
          Experience traditional flavors with a modern 
          twist. From handmade pasta to 
           wood-fired pizzas, enjoy a cozy and unforgettable dining atmosphere.
        </p>
        <button  className='Rbutton' onClick={() => alert('Reservation functionality not implemented')}>
          Reserve Table
        </button>
      </div>
      <div className="cardR-image">
        <img
          src={image1}
          alt="Restaurant Image"
        />

      </div>
    </div>
  );
};

export default Reserve;
