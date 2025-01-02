import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TrackingPage.css';
import image1 from '../../../images/sofa.jpeg';
import image2 from '../../../images/sofa2.jpg';
import image3 from '../../../images/sofa3.jpg';
import image4 from '../../../images/sofa4.jpg';

function TrackingPage() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "3 - Seat Sofa", price: "Rs.20,990", image: image1, trackingId: "TRACK123SOFA" },
    { id: 2, name: "Corner Sofa-bed with Storage", price: "Rs.54,990", image: image2, trackingId: "TRACK124SOFA" },
    { id: 3, name: "Sofa-bed", price: "Rs.19,990", image: image3, trackingId: "TRACK125SOFA" },
    { id: 4, name: "3- Seat Sofa", price: "Rs.27,990", image: image4, trackingId: "TRACK126SOFA" },
  ];

  return (
    <div className="tracking-page">
      <h1 className="fade-in">MY ORDERS</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card slide-in" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image boom-effect" 
            />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
            </div>
            <button 
              className="track-button bouance"
              onClick={() => navigate('/order', { state: product })}
            >
              Track
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackingPage;
