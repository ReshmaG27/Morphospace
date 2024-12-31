import React from "react";
import "./PastOrders.css";// Import the CSS file
import sofa from '../../../images/sofa.jpeg';
import chair from '../../../images/chair.jpeg';

const PastOrders = () => {
  const orders = [
    {
      id: "OD125341557788123456789",
      name: "3 - Seat Sofa, Grey",
      price: "Rs.20,990",
      deliveryDate: "Aug 03, 2024",
      image: sofa, // Replace with your sofa image URL
    },
    {
      id: "OD125341557788123456123",
      name: "Swivel Chair, Black",
      price: "Rs.7,499",
      deliveryDate: "Jul 15, 2024",
      image: chair, // Replace with your chair image URL
    },
  ];

  return (
    <div className="past-orders-container">
      <h1 className="past-orders-title">Past Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <img src={order.image} alt={order.name} className="order-image" />
          <div className="order-details">
            <p className="order-id">Order ID - {order.id}</p>
            <h2 className="order-name">{order.name}</h2>
            <p className="order-price">{order.price}</p>
            <p className="order-tax">Price incl. of all taxes</p>
            <p className="order-delivery">Delivered on {order.deliveryDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastOrders;
