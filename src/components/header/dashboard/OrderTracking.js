import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderTracking.css';

const OrderTracking = () => {
  const location = useLocation();
  const product = location.state; // Retrieve the passed state

  return (
    <div className="tracking-container">
      <h1>Track Your Order</h1>
      <div className="tracking-id">
        <p>Your tracking ID is: <span className="tracking-id-value">{product.trackingId}</span></p>
      </div>
      {/* Product Details Section */}
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
      {/* Order Progress Bar */}
      <div className="progress-container">
        <ul className="progress-bar">
          <li className="progress-item active">
            <div className="circle"></div>
            <div className="step">Order Confirmed</div>
            <span className="date">2024-12-01</span>
          </li>
          <li className="progress-item active">
            <div className="circle"></div>
            <div className="step">Shipped</div>
            <span className="date">2024-12-02</span>
          </li>
          <li className="progress-item">
            <div className="circle"></div>
            <div className="step">Out for Delivery</div>
            <span className="date">2024-12-05</span>
          </li>
          <li className="progress-item">
            <div className="circle"></div>
            <div className="step">Delivered</div>
            <span className="date">2024-12-06</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderTracking;
