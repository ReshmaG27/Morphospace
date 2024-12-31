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
    { id: 1, name: "Product 1", price: "$50", image: image1 },
    { id: 2, name: "Product 2", price: "$75", image: image2 },
    { id: 3, name: "Product 3", price: "$75", image: image3 },
    { id: 4, name: "Product 4", price: "$75", image: image4 },
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
              onClick={() => navigate('/order')}
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
