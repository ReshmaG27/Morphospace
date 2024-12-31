import React from 'react';
import './OrderTracking.css';
import image1 from '../../../images/sofa.jpeg';



const OrderTracking = () => {
    return (
        <div className="tracking-container">
            <h1>Track Your Order</h1>
            <div className="tracking-id">
                <p>Your tracking ID is: <span className="tracking-id-value">ABC123XYZ</span></p>
            </div>
            {/* Product Details Section */}
            <div className="product-details">
                <img src={image1} alt="Product Image" className="product-image" />
                <p className="product-name">Product Name 1</p>
                <p className="product-price">$25.99</p>
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
