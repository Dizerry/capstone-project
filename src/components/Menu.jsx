import React from 'react';
import salad from '../assets/salad.jpg'; // Ensure you have the correct path to your image
import bruschetta from '../assets/bruschetta.jpg'; // Ensure you have the correct path to your image
import tasta from '../assets/tasta.jpg'; // Ensure you have the correct path to your image
import customer1 from '../assets/customer1.jpg'; // Ensure you have the correct path to your image
import customer2 from '../assets/customer2.jpg'; // Ensure you have the correct path to your image
import customer4 from '../assets/customer4.jpg'; // Ensure you have the correct path to your image

const Menu = () => {
  return (
    <div>
      <div className="menu-header">
      <h1 className="menu-heading">this week specials</h1>
      <button className="menu-button">online menu</button>
      </div>


      <div className="specials">
        <div className="card1">
          <img src={salad} alt="Salad" />
          <p className="price">price: 23.5</p>
          <p><strong>button link</strong></p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>

          <p className="order-link">order yours here</p>
        </div>

        <div className="card1">
          <img src={bruschetta} alt="Bruschetta" />
          <p className="price">price: 23.5</p>
          <p><strong>button link</strong></p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
         
          <p className="order-link">order yours here</p>
        </div>

        <div className="card1">
          <img src={tasta} alt="tasta" />
          <p className="price">price: 23.5</p>
          <p><strong>button link</strong></p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          
          <p className="order-link">order yours here</p>
        </div>
      </div>

      <div>
        <h1>Testimonials</h1>

        <div className="testimonials">
          <div>
            <img src={customer1} alt="Customer1" className="testimonial-img"/>
            <div className="stars">★★★★★</div>
            <p>"Absolutely delicious! The service was outstanding and the ambiance perfect. Highly recommend."</p>
          </div>

          <div>
            <img src={customer2} alt="Customer2"  className="testimonial-img"/>
            <div className="stars">★★★★☆</div>
            <p>"Great food and fast service. I loved the pasta! Will definitely be back again."</p>
          </div>

          <div>
            <img src ={customer4} alt="Customer4" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p>"A fantastic dining experience. The flavors were authentic and the staff was friendly."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
